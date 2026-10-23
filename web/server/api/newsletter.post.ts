import { brevoService } from '~~/server/utils/brevo'
import { emailValidator, requiredValidator } from '#shared/validators'

type NewsletterBody = {
  email: string
  rgpd: boolean
  altchaPayload: string
}

export default defineEventHandler(async (event) => {

  // Read and parse the request body as NewsletterBody
  const body = await readBody<NewsletterBody>(event)


  // Check the ALTCHA verification result
  const altchaResult = event.context.altcha
  if (altchaResult?.error || !altchaResult?.verification?.verified) {
    throw createError({
      statusCode: 403,
      statusMessage: altchaResult?.error || 'Verification failed'
    })
  }

  // Validate the form fields using the defined validators
  const formRulesValidators = {
    email: [emailValidator, requiredValidator],
    rgpd: [requiredValidator]
  }

  for (const field in formRulesValidators) {
    const validators = formRulesValidators[field as keyof typeof formRulesValidators]
    for (const validator of validators) {
      if (!validator(body[field as keyof NewsletterBody].toString())) {
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid ${field}`
        })
      }
    }
  }

  // Proceed to create the contact in Brevo
  try {
    await brevoService.contacts.createContact({
      email: body.email,
      listIds: [parseInt(process.env.BREVO_LIST_ID!)]
    })

    return { success: true, message: 'Form submitted successfully' }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create contact'
    })
  }
})
