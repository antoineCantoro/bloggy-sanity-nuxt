export default defineEventHandler(async (event) => {
  // The middleware has already verified the ALTCHA token.
  // If throwOnFailure is true, invalid requests never reach here.

  // Optionally inspect the result:
  const altchaResult = event.context.altcha;
  if (!altchaResult?.verification) {
    throw new HTTPError(403, {
      message: altchaResult?.error || 'Verification failed',
    });
  }

  const body = await readBody(event);

  return { success: true, message: 'Form submitted successfully' };
})
