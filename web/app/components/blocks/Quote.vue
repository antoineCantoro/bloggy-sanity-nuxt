<template>
  <figure>
    <blockquote v-if="quote?.length">
      <SanityContent :value="quote" />
    </blockquote>

    <figcaption v-if="author">
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
