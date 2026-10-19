<script setup lang="ts">
  // Components
  // import NewsCard from '~/components/molecules/NewsCard.vue';

  // Type
  // type PostsQueryResult = Array<{
  //   _id: string;
  //   title: string;
  //   publishedAt: string;
  //   slug: {
  //     current: string;
  //   };
  // }>;

  // const HOME_PAGE_QUERY = groq`*[_id == "homePage"][0]{title}`;
  // const { data: page } = await useSanityQuery<{ title?: string } | null>(HOME_PAGE_QUERY);

  // // Posts query
  // const blogPostsQuery = groq`*[
  //   _type == "blogItemPage"
  //   && defined(slug.current)
  // ]|order(publishedAt desc)[0...12]{_id, slug, title, publishedAt}`;

  // const { data: posts } = await useSanityQuery<PostsQueryResult>(blogPostsQuery);


</script>

<template>
  <main class="container mx-auto min-h-screen max-w-3xl p-8">
    <!-- <h1 class="text-4xl font-bold mb-8">{{ page?.title }}</h1> -->

    <!-- <ul class="flex flex-col gap-y-4">
      <li v-for="post in posts" :key="post._id">
        <news-card
          :title="post.title"
          :publishedAt="post.publishedAt"
          :url="`/articles/${post.slug.current}`"
          :titleTag="'h3'"
        />
      </li>
    </ul> -->
  </main>
</template>
