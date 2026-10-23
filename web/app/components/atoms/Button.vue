<template>
  <component :is="href ? 'a' : 'button'" :href="href" class="a-button text-sm font-medium rounded flex flex-row items-center gap-2 px-4 py-[13px]" :class="variantClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href?: string|undefined;
    variant?: 'primary' | 'secondary'
  }>()

  const variantClass = computed(() => {
    switch (props.variant) {
      case 'primary':
        return 'bg-blue-500 text-white'
      case 'secondary':
        return 'bg-gray-200'
      default:
        return ''
    }
  })
</script>

<style>
  /* @reference "../../assets/css/main.css";

  .a-button {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  } */
</style>
