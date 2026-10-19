<script setup lang="ts">
  // Components
  import NewsCard from '~/components/molecules/NewsCard.vue';
  import Pagination from '~/components/molecules/Pagination.vue';

  // Type
  import type { SanityImageSource } from "@sanity/image-url";
  import type { PortableTextBlock } from "@portabletext/types";
  type PostsQueryResult = Array<{
    _id: string;
    title: string;
    publishedAt: string;
    readingTime?: string;
    enablePasswordRestricted?: boolean;
    excerpt?: PortableTextBlock[];
    slug: {
      current: string;
    };
    image?: SanityImageSource;
    author?: string;
    imageAlt?: string;
  }>;

  const BLOG_INDEX_PAGE_QUERY = groq`*[_id == "blogIndexPage"][0]{title}`;
  const POSTS_PER_PAGE = 1;
  const { data: page } = await useSanityQuery<{ title?: string } | null>(BLOG_INDEX_PAGE_QUERY);

  const route = useRoute()
  const currentPage = ref(Number(route.query.page) || 1);

  // Posts query
  const blogPostsQuery = groq`*[
    _type == "blogItemPage"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...${POSTS_PER_PAGE}]{_id, slug, title, publishedAt, readingTime, image, "excerpt": excerpt.excerpt, imageAlt, enablePasswordRestricted}`;

  const { data: totalArticles } = await useSanityQuery<number>(groq`count(*[_type == "blogItemPage"])`);
  const { data: posts } = await useSanityQuery<PostsQueryResult>(blogPostsQuery);

  // let lastPublishedAt = posts?.[posts.length - 1]?.publishedAt;
  // console.log(lastPublishedAt);
  // console.log(posts);

  let lastPublishedAt = ''
  let lastId = ''

  // Computed
  const pagination = computed(() => {
    return {
      total: totalArticles.value ?? 0,
      perPage: POSTS_PER_PAGE,
      currentPage: currentPage.value
    }
  });



  const onUpdateCurrentPage = async (newPage: number) => {
    // console.log('Updating to page:', newPage);
    currentPage.value = newPage;
    // const nextPosts = await fetchNextPage();
    // if (nextPosts.length > 0) {
    //   posts.value = [...(posts.value ?? []), ...nextPosts];
    // }
  };

  const onClickPrevious = async (newPage: number) => {
    // console.log('Updating to previous page:', newPage);
    if (newPage < 1) {
      return;
    }
    currentPage.value = newPage;
  };

  const onClickNext = async (newPage: number) => {
    // console.log('Updating to next page:', newPage);
    if (newPage > Math.ceil((totalArticles.value ?? 0) / POSTS_PER_PAGE)) {
      return;
    }
    currentPage.value = newPage;
  };

  // Fetch the next page of blog posts
  const fetchNextPage = async () => {
    if (lastId === '' || lastPublishedAt === '') {
      return []
    }

    const result = await $fetch(
      groq`*[_type == "blogItemPage" && (
        publishedAt > $lastPublishedAt
        || (publishedAt == $lastPublishedAt && _id > $lastId)
      )] | order(publishedAt) [0...${POSTS_PER_PAGE}] {
        _id, slug, title, publishedAt, readingTime, image, "excerpt": excerpt.excerpt, imageAlt, enablePasswordRestricted
      }`, {lastPublishedAt, lastId})

    if (result.length > 0) {
      lastPublishedAt = result[result.length - 1].publishedAt
      lastId = result[result.length - 1]._id
    } else {
      lastId = ''  // Reached the end
      lastPublishedAt = ''
    }
    return result

    // Implement the logic to fetch the next page of the blog post
  };
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
          :enablePasswordRestricted="post.enablePasswordRestricted"
          :excerpt="post.excerpt"
          :readingTime="post.readingTime"
          :author="post.author"
          :image="post.image"
          :imageAlt="post.imageAlt"
        />
      </li>
    </ul>

    <Pagination
      @update:currentPage="onUpdateCurrentPage"
      @update:previous="onClickPrevious"
      @update:next="onClickNext"
      :total="pagination.total"
      :per-page="pagination.perPage"
      :current-page="pagination.currentPage" />
  </main>
</template>
