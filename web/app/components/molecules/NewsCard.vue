<template>
  <div class="m-newsCard relative group grid grid-cols-1 md:grid-cols-2">
    <figure class="overflow-hidden aspect-square">
      <img v-if="computedImageUrl" :src="computedImageUrl" :alt="imageAlt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800" />
    </figure>

    <div class="pl-8 py-1 border-t-1 flex flex-col justify-between items-start">
      <!-- Top -->
      <div class="flex flex-row justify-between w-full pt-2">
        <p class="text-[14px]/[13px] font-bold w-25%">{{ new Date(publishedAt).toLocaleDateString("fr-FR", { timeZone: "UTC" }) }}</p>
        <p class="text-[14px]/[13px] font-bold w-25%">{{ readingTime }}</p>
        <NuxtLink v-slot="{ href, navigate }" :to="url" custom>
          <a :href="href" @click="navigate" class="w-1/2 text-right text-[64px]/[16px] after:content-[''] after:absolute after:inset-0">→</a>
        </NuxtLink>
      </div>

      <!-- Middle -->
      <component :is="titleTag" class="text-[36px]/[32px] font-bold w-1/2 block">{{ title }}</component>

      <!-- Bottom -->
      <div class="w-1/2 text-[14px]/[13px] font-bold line">
        <!-- <p v-if="excerpt" class="w-50">{{ excerpt }}</p> -->
      <SanityContent :value="excerpt.excerpt" v-if="excerpt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { SanityImageSource } from "@sanity/image-url";

  const {
    title = "",
    excerpt = "",
    image = "",
    imageAlt = "",
    publishedAt,
    readingTime = "",
    author = "",
    url = "",
    titleTag = "h3",
  } = defineProps<{
    title?: string;
    excerpt?: string;
    image?: SanityImageSource;
    imageAlt?: string;
    publishedAt?: string;
    readingTime?: string;
    author?: string;
    url?: string;
    titleTag?: "h2" | "h3" | "h4";
  }>()

  const urlFor = useSanityImageUrl();
  const computedImageUrl = computed(() =>
    image ? urlFor(image)?.width(550).height(310).url() : undefined,
  );
</script>

<style>
  @reference "../../assets/css/main.css";

  .m-newsCard {
  }
</style>
