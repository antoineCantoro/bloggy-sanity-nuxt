<script setup lang="ts">
import { BLOG_ITEM_QUERY } from "~/queries/blog";
import type { SanityDocument } from "@sanity/client";

// Template related components
import HeroBlog from "~/components/HeroBlog.vue";

// Block components
import Hero from "~/components/blocks/Hero.vue";
import Gallery from "~/components/blocks/Gallery.vue";
import Video from "~/components/blocks/Video.vue";
import Quote from "~/components/blocks/Quote.vue";
import TextContent from "~/components/blocks/TextContent.vue";

// Define page template middlewares
definePageMeta({
  middleware: 'protected-blog-post',
})

// Registered block components mapping
const registredBlockComponents: Record<string, any> = {
  Hero: Hero,
  Gallery: Gallery,
  Video: Video,
  Quote: Quote,
  Text: TextContent,
};

// Query and route parameters for fetching the blog post
const { params } = useRoute();
const { data: post } = await useSanityQuery<SanityDocument>(BLOG_ITEM_QUERY, params);

// Metadata resolution function
const resolveMetadata = (post: SanityDocument) => {
  const metaTitle = post.metaTitle ?? post.metaTitle ?? post.title;
  const metaDescription = post.metaDescription ?? post.ogMetaDescription ?? post.excerpt?.excerpt?.[0]?.children?.[0]?.text ?? '';

  return {
    title: metaTitle,
    description: metaDescription,
  };
};

// Metadata
if (import.meta.server) {
  if (post) {
    const { title: metaTitle, description: metaDescription } = resolveMetadata(post);
    useSeoMeta({
      title: metaTitle,
      description: metaDescription,
    });
  }
}

const dynamicTitle = ref(post?.title || '')
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
})

</script>

<template>
  <main
    v-if="post"
    class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-10"
  >
    <HeroBlog
      v-if="post.title"
      :title="post.title"
      :subtitle="post.subtitle"
      :image="post.image"
      :publishedAt="post.publishedAt"
    />

    <!-- Excerpt Section -->
    <div class="t-blogIndex_excerpt font-bold text-2xl">
      <SanityContent v-if="post.excerpt?.excerpt" :value="post.excerpt.excerpt" />
    </div>

    <!-- <SanityContent v-if="post.body" :value="post.body" /> -->

    <!-- Block Builder -->
    <template v-for="block in post.pageBuilder" :key="block._key">
      <component
        :is="registredBlockComponents[block._type]"
        v-if="registredBlockComponents[block._type]"
        v-bind="block"
      />
    </template>

    <!-- Debug output for the page builder blocks -->
    <h3 class="text-lg font-bold">Page Builder Debug Output</h3>
    <pre class="rounded-md p-4 bg-gray-100 overflow-x-auto">{{ post.pageBuilder }}</pre>
  </main>
</template>
