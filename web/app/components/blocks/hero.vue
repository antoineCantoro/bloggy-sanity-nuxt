<template>
  <div class="hero p-4 flex flex-col gap-4">
    <h1 class="text-3xl font-bold" v-if="heading">{{ heading }}</h1>
    <p class="text-lg" v-if="tagline">{{ tagline }}</p>
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    heading?: string;
    tagline?: string;
  }>();
</script>
