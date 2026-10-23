<template>
  <div class="m-pushNewsletter bg-blue-50 text-black p-8 flex justify-between items-center gap-4">
    <div class="flex flex-col gap-2">
      <p class="text-blue-500 text-[11px]">THE STACK DISPATCH</p>
      <h3 class="text-[30px] font-600">Less noise. More perspective.</h3>
      <p class="text-[14px]">Our best stories on engineering, design, and AI. In your inbox every Thursday.</p>
    </div>
    <div class="flex flex-col gap-2">
      <form
        @submit.prevent="handleFormSubmit"
        v-if="!formData.success"
      >
        <fieldset class="flex flex-col gap-2">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" name="email" placeholder="you@example.com" required />
        </fieldset>
        <fieldset class="flex flex-col gap-2" v-show="formData.email">
          <label for="rgpd">checkbox</label>
          <input type="checkbox" id="rgpd" v-model="formData.rgpd" name="rgpd" />
        </fieldset>

        <AppButton type="submit" variant="primary">
          Subscribe <ArrowRight :size="16" />
        </AppButton>
        <ClientOnly>
            <Altcha
              v-model:payload="formData.altchaPayload"
            />
        </ClientOnly>

      </form>
      <p v-if="formData.success">Thank you for subscribing!</p>
      <p v-else-if="formData.error">An error occurred: {{ formData.error }}</p>
      <p v-else>No spam, ever. Unsubscribe in a click.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Altcha from '~/components/atoms/Altcha.vue';
import AppButton from '~/components/atoms/Button.vue'
import { ArrowRight } from '@lucide/vue';
import { emailValidator, requiredValidator } from '#shared/validators'

const formData = reactive({
  email: '',
  rgpd: false,
  altchaPayload: '',
  isSubmitting: false,
  success: false,
  error: null as string | null,
});

async function validateForm() {
  if (!emailValidator(formData.email)) {
    formData.error = 'Invalid email';
    return false;
  }
  if (!requiredValidator(formData.rgpd.toString())) {
    formData.error = 'RGPD consent is required';
    return false;
  }
  return true;
}

async function handleFormSubmit () {
  formData.isSubmitting = true;
  formData.error = null;

  const isValid = await validateForm();
  if (!isValid) {
    formData.isSubmitting = false;
    return;
  }

  try {
    const res = await $fetch('/api/newsletter', {
      method: 'POST',
      body: {
        email: formData.email,
        rgpd: formData.rgpd,
        altchaPayload: formData.altchaPayload,
      },
    });

    formData.success = res.success;
  } catch (error) {
    formData.error = error instanceof Error ? error.message : 'Subscription failed';
  } finally {
    formData.isSubmitting = false;
  }
}
</script>
