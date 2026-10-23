import { BrevoClient } from "@getbrevo/brevo";

const { brevoApiKey } = useRuntimeConfig().server

export const brevoService = new BrevoClient({
  apiKey: brevoApiKey
});
