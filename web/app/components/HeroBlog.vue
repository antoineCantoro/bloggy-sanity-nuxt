<template>
  <div class="m-heroBlog flex flex-col gap-4">
    <a href="/articles" class="hover:underline mb-4">&larr; Back to posts</a>
    <h2 v-if="subtitle">{{ subtitle }}</h2>
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="title"
      class="aspect-video rounded-xl w-full"
      fetchpriority="high"
      decoding="async"
      width="550"
      height="310"
    />

    <h1 class="text-4xl font-bold">{{ title }}</h1>

    <p v-if="publishedAt">
      Published:
      {{ new Date(publishedAt).toLocaleDateString("fr-FR", { timeZone: "UTC" }) }}
    </p>

    <hr />
  </div>
</template>

<script setup lang="ts">
  import type { SanityImageSource } from "@sanity/image-url";

  const props = defineProps<{
    title: string;
    subtitle?: string;
    image?: SanityImageSource;
    publishedAt?: string;
  }>();

  const urlFor = useSanityImageUrl();
  const imageUrl = computed(() =>
    props.image ? urlFor(props.image)?.width(800).height(800).url() : undefined,
  );
</script>
