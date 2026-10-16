<template>
  <component :is="href ? 'a' : 'button'" :href="href" class="a-button">
    <slot />
  </component>
</template>

<script setup lang="ts">
  defineProps<{
    href?: string|undefined;
  }>()
</script>

<style>
  @reference "../../assets/css/main.css";

  .a-button {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
</style>
