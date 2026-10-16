<template>
  <div class="b-text flex flex-col gap-2">
    <SanityContent :value="textContent" />
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    textContent: string;
  }>();
</script>
