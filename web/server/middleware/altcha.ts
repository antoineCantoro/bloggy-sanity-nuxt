import { altcha } from '#server/utils/altcha';

const altchaMiddleware = altcha.middleware({
  throwOnFailure: true,
});

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  const protectedPaths = ['/api/newsletter'];
  const isProtected = protectedPaths.some((path) => url.pathname.startsWith(path));

  if (isProtected && event.method === 'POST') {
    await altchaMiddleware(event);
  }
});
