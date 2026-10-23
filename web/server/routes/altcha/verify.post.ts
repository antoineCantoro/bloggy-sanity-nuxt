import { verifyAltchaPayload } from '#server/utils/altcha'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = await verifyAltchaPayload(body?.altchaPayload)

  if (result.error) {
    throw createError({ statusCode: 403, statusMessage: result.error })
  }

  return { success: true, verification: result.verification }
})
