<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

// import SanityContent from "~/app/components/sanity-content.vue";
import Hero from "~/components/blocks/hero.vue";

const blockComponents = {
  hero: Hero,
};

const POST_QUERY = groq`*[_type == "blogItemPage" && slug.current == $slug][0]`;
const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;
</script>

<template>
  <main
    v-if="post"
    class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4"
  >
    <a href="/" class="hover:underline">&larr; Back to posts</a>
    <img
      v-if="post.image"
      :src="urlFor(post.image)?.width(550).height(310).url()"
      :alt="post?.title"
      class="aspect-video rounded-xl"
      fetchpriority="high"
      decoding="async"
      width="550"
      height="310"
    />
    <h1 v-if="post.title" class="text-4xl font-bold mb-8">{{ post.title }}</h1>
    <div class="prose">
      <p v-if="post.publishedAt">
        Published: {{ new Date(post.publishedAt).toLocaleDateString() }}
      </p>
      <SanityContent v-if="post.body" :value="post.body" />
      <hr />

      {{ post.pageBuilder }}

      <hr />

      <template v-for="block in post.pageBuilder" :key="block._key">
        <component
          :is="blockComponents[block._type]"
          v-if="blockComponents[block._type]"
          v-bind="block"
        />
      </template>
    </div>
  </main>
</template>
