<template>
  <hr class="b-divider border-t border-gray-300" :class="class" />
</template>

<script setup lang="ts">
defineProps({
  class: {
    type: String,
    default: 'my-6'
  }
})
</script>
