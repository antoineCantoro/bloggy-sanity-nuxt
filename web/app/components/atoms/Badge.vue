<template>
  <span class="a-badge px-3 py-2 text-xs font-mono rounded-sm" :class="['badge', typeClass]">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: 'default' | 'selected'
}>()

const typeClass = computed(() => {
  switch (props.type) {
    case 'default':
      return 'text-neutral-900'
    case 'selected':
      return 'bg-blue-100 text-blue-500'
    default:
      return ''
  }
})
</script>
