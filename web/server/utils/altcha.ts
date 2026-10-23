import { CappedMap, createChallenge, randomInt, verifySolution } from 'altcha-lib'
import type { Payload } from 'altcha-lib'
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2'

const usedChallenges = new CappedMap<string, boolean>({ maxSize: 1_000 })

export async function createAltchaChallenge() {
  const { altchaHmacSecret } = useRuntimeConfig().server
  if (!altchaHmacSecret) {
    throw createError({ statusCode: 500, statusMessage: 'ALTCHA secret is not configured' })
  }

  return createChallenge({
    algorithm: 'PBKDF2/SHA-256',
    cost: 5_000,
    counter: randomInt(5_000, 10_000),
    expiresAt: new Date(Date.now() + 600_000),
    deriveKey,
    hmacSignatureSecret: altchaHmacSecret
  })
}

export async function verifyAltchaPayload(value: unknown) {
  const payload = decodePayload(value)
  if (!payload) {
    return { error: 'ALTCHA payload is missing or invalid', payload: null, verification: null }
  }

  const { altchaHmacSecret } = useRuntimeConfig().server
  if (!altchaHmacSecret) {
    throw createError({ statusCode: 500, statusMessage: 'ALTCHA secret is not configured' })
  }

  const verification = await verifySolution({
    challenge: payload.challenge,
    solution: payload.solution,
    deriveKey,
    hmacSignatureSecret: altchaHmacSecret
  })

  if (!verification.verified) {
    return {
      error: verification.expired
        ? 'ALTCHA challenge expired'
        : verification.invalidSignature
          ? 'Invalid ALTCHA signature'
          : verification.invalidSolution
            ? 'Invalid ALTCHA solution'
            : 'ALTCHA verification failed',
      payload,
      verification
    }
  }

  const challengeId = payload.challenge.parameters.nonce
  if (!usedChallenges.setIfAbsent(challengeId, true)) {
    return { error: 'ALTCHA payload has already been used', payload, verification }
  }

  return { error: null, payload, verification }
}

function decodePayload(value: unknown): Payload | null {
  let decoded = value
  if (typeof value === 'string') {
    try {
      decoded = JSON.parse(atob(value))
    } catch {
      return null
    }
  }

  if (
    typeof decoded !== 'object'
    || decoded === null
    || !('challenge' in decoded)
    || !('solution' in decoded)
  ) {
    return null
  }

  return decoded as Payload
}
