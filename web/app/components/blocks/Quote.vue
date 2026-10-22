<template>
  <div class="b-quote border border-gray-300 bg-white p-8">
    <figure class="flex flex-col gap-y-4 items-start pl-6 border-l-2 border-blue-500">
      <blockquote v-if="quote?.length" class="text-2xl ">
        <SanityContent :value="quote" />
      </blockquote>

      <figcaption v-if="author" class="font-mono text-xs text-gray-500">
        {{ author }}
        <span v-if="role"> / {{ role }}</span>
      </figcaption>
    </figure>
  </div>
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
