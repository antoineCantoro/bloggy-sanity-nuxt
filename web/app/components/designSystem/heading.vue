<template>
  <div class="flex justify-between gap-4 items-center mb-4">
    <h3 class="">
      <span class="text-blue-500 font-regular pr-2 font-mono text-xs">{{ level < 10 ? '0' + level : level }}:</span> <span class="font-semibold text-lg">{{ text }}</span>
    </h3>
    <p v-if="info" class="font-mono text-xs text-gray-500">{{ info }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  level: {
    type: Number,
    default: 2
  },
  text: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: false
  },
})
</script>
