import { verifyAltchaPayload } from '#server/utils/altcha'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)

  const protectedPaths = ['/api/newsletter']
  const isProtected = protectedPaths.some(path => url.pathname.startsWith(path))

  if (isProtected && event.method === 'POST') {
    const body = await readBody(event)
    const result = await verifyAltchaPayload(body?.altchaPayload)
    event.context.altcha = result

    if (result.error) {
      throw createError({ statusCode: 403, statusMessage: result.error })
    }
  }
})
