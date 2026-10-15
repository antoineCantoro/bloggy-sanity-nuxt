<script setup lang="ts">
  const HOME_PAGE_QUERY = groq`*[_id == "homePage"][0]{title}`;
  const { data: page } = await useSanityQuery<{ title?: string } | null>(HOME_PAGE_QUERY);


  // Posts query
  const blogPostsQuery = groq`*[
    _type == "blogItemPage"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, slug, title, publishedAt}`;

  const { data: posts } = await useSanityQuery<PostsQueryResult>(blogPostsQuery);
</script>

<template>
  <main class="container mx-auto min-h-screen max-w-3xl p-8">
    <h1 class="text-4xl font-bold mb-8">{{ page?.title }}</h1>

    <ul class="flex flex-col gap-y-4">
      <li v-for="post in posts" :key="post._id" class="hover:underline">
        <nuxt-link :to="`/articles/${post.slug.current}`">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
