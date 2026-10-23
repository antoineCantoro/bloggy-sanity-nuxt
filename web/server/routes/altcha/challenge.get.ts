import { createAltchaChallenge } from '#server/utils/altcha'

export default defineEventHandler(() => {
  return createAltchaChallenge()
})
