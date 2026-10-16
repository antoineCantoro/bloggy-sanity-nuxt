<template>
  <figure class="b-quote flex flex-col gap-y-3 items-start bg-gray-100 p-4 rounded">
    <blockquote v-if="quote?.length">
      <SanityContent :value="quote" />
    </blockquote>

    <figcaption v-if="author" class="text-xs text-gray-600">
      {{ author }}
      <span v-if="role"> · {{ role }}</span>
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
  defineProps<{
    quote?: Array<any>;
    author?: string;
    role?: string;
    image?: {
      alt?: string;
      url?: string;
    };
  }>();
</script>
