<template>
  <div class="b-video flex flex-col">
    <iframe
      width="560"
      height="315"
      class="rounded w-full aspect-video"
      :src="`https://www.youtube.com/embed/${youtube_id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p v-if="display_title" class="text-lg font-bold mt-2">{{ title }}</p>
    <p v-if="legend" class="text-sm text-gray-500">{{ legend }}</p>
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    title: string;
    youtube_id: string;
    display_title: boolean;
    legend?: string;
  }>();
</script>
