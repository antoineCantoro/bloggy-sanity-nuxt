<script setup lang="ts">
  // Components
  import NewsCard from '~/components/molecules/NewsCard.vue';

  // Type
  import type { SanityImageSource } from "@sanity/image-url";
  type PostsQueryResult = Array<{
    _id: string;
    title: string;
    publishedAt: string;
    readingTime?: string;
    excerpt?: string;
    slug: {
      current: string;
    };
    imageAlt?: string;
    author?: string;
    imageAlt?: string;
  }>;

  const BLOG_INDEX_PAGE_QUERY = groq`*[_id == "blogIndexPage"][0]{title}`;
  const { data: page } = await useSanityQuery<{ title?: string } | null>(BLOG_INDEX_PAGE_QUERY);

  // Posts query
  const blogPostsQuery = groq`*[
    _type == "blogItemPage"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, slug, title, publishedAt, readingTime, image, excerpt, imageAlt}`;

  const { data: posts } = await useSanityQuery<PostsQueryResult>(blogPostsQuery);
</script>

<template>
  <main class="py-16">
    <h1 class="text-[120px] font-bold mb-8">{{ page?.title }}</h1>

    <ul class="px-2">
      <li v-for="post in posts" :key="post._id">
        <news-card
          :title="post.title"
          :publishedAt="post.publishedAt"
          :url="`/articles/${post.slug.current}`"
          :titleTag="'h3'"
          :excerpt="post.excerpt"
          :readingTime="post.readingTime"
          :author="post.author"
          :image="post.image"
          :imageAlt="post.imageAlt"
        />
      </li>
    </ul>
  </main>
</template>
