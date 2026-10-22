import { getAltcha } from '#server/utils/altcha';

export default defineEventHandler(async (event) => {
  const altcha = await getAltcha();
  return altcha.verifyHandler(event);
});
