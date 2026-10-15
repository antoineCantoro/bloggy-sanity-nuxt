<script setup lang="ts">

  // Posts query
  const postsQuery = groq`*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

  const { data: posts } = await useSanityQuery<PostsQueryResult>(postsQuery);

  // Artists query
  const artistsQuery = groq`*[
    _type == "artist"
    && defined(slug.current)
  ]|order(name asc)[0...12]{_id, name, slug}`;

  const { data: artists } = await useSanityQuery<ArtistsQueryResult>(artistsQuery);
</script>

<template>
  <main class="container mx-auto min-h-screen max-w-3xl p-8">
    <h1 class="text-4xl font-bold mb-8">Posts</h1>
    <ul class="flex flex-col gap-y-4">
      <li v-for="post in posts" :key="post._id" class="hover:underline">
        <nuxt-link :to="`/${post.slug.current}`">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </nuxt-link>
      </li>
    </ul>

    <h1 class="text-4xl font-bold mb-8">Artists</h1>
    <ul class="flex flex-col gap-y-4">
    {{ artists.length }}
      <li v-for="artist in artists" :key="artist._id" class="hover:underline">
        <nuxt-link :to="`/${artist.slug.current}`">
          <h2 class="text-xl font-semibold">{{ artist.name }}</h2>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
