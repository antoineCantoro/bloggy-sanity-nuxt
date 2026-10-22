import { create, deriveHmacKeySecret, randomInt, CappedMap } from 'altcha-lib/frameworks/h3';
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2';

type Altcha = ReturnType<typeof create>;

let altchaPromise: Promise<Altcha> | undefined;

export function getAltcha(): Promise<Altcha> {
  if (!altchaPromise) {
    altchaPromise = (async () => {
      const { altchaHmacSecret, altchaHmacKeySecret } = useRuntimeConfig().server;

      return create({
        hmacSignatureSecret: altchaHmacSecret,
        hmacKeySignatureSecret:
          altchaHmacKeySecret || await deriveHmacKeySecret(altchaHmacSecret),
        createChallengeParameters: () => ({
          algorithm: 'PBKDF2/SHA-256',
          cost: 5_000,
          counter: randomInt(5_000, 10_000),
          expiresAt: new Date(Date.now() + 600_000),
        }),
        deriveKey,
        setCookie: {
          name: 'altcha',
          path: '/',
        },
        store: new CappedMap<string, boolean>({
          maxSize: 1_000,
        }),
      });
    })();
  }

  return altchaPromise;
}
