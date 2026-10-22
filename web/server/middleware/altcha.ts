import { getAltcha } from '#server/utils/altcha';

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  const protectedPaths = ['/api/newsletter'];
  const isProtected = protectedPaths.some((path) => url.pathname.startsWith(path));

  if (isProtected && event.method === 'POST') {
    const altcha = await getAltcha();
    const altchaMiddleware = altcha.middleware({
      throwOnFailure: true,
    });
    await altchaMiddleware(event);
  }
});
