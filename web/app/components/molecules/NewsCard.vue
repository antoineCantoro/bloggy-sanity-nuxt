<template>
  <div class="m-newsCard">
    <component :is="titleTag" class="text-xl font-semibold">{{ title }}</component>
    <p>{{ new Date(publishedAt).toLocaleDateString("fr-FR", { timeZone: "UTC" }) }}</p>
    <p v-if="author">{{ author }}</p>
    <p v-if="excerpt">{{ excerpt }}</p>

    <NuxtLink v-slot="{ href, navigate }" :to="url" custom>
      <Button
        :href="href"
        @click="navigate"
        >Read More
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import Button from "~/components/atoms/Button.vue"

  const {
    title = "",
    excerpt = "",
    imageUrl = "",
    imageAlt = "",
    publishedAt,
    author = "",
    url = "",
    titleTag = "h3",
  } = defineProps<{
    title?: string;
    excerpt?: string;
    imageUrl?: string;
    imageAlt?: string;
    publishedAt?: string;
    author?: string;
    url?: string;
    titleTag?: "h2" | "h3" | "h4";
  }>()
</script>

<style>
  @reference "../../assets/css/main.css";

  .m-newsCard {
    @apply p-4 border rounded shadow hover:shadow-lg transition flex flex-col gap-y-2 items-start;
  }
</style>
