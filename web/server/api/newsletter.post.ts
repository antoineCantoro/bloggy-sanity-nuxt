export default defineEventHandler(async (event) => {
  // The middleware has already verified the ALTCHA token.
  // If throwOnFailure is true, invalid requests never reach here.

  // Optionally inspect the result:
  const altchaResult = event.context.altcha
  if (altchaResult?.error || !altchaResult?.verification?.verified) {
    throw createError({
      statusCode: 403,
      statusMessage: altchaResult?.error || 'Verification failed'
    })
  }

  return { success: true, message: 'Form submitted successfully' }
})
