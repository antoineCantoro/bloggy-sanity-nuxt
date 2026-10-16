<script setup lang="ts">
import { BLOG_ITEM_QUERY } from "~/queries/blog";
import type { SanityDocument } from "@sanity/client";

// Template related components
import HeroBlog from "~/components/HeroBlog.vue";

// Block components
import Hero from "~/components/blocks/hero.vue";

const registredBlockComponents: Record<string, any> = {
  hero: Hero,
};

const POST_QUERY = BLOG_ITEM_QUERY;
const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
</script>

<template>
  <main
    v-if="post"
    class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4"
  >
    <HeroBlog
      v-if="post.title"
      :title="post.title"
      :subtitle="post.subtitle"
      :image="post.image"
      :publishedAt="post.publishedAt"
    />

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
