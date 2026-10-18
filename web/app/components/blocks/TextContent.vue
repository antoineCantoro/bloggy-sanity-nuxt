<template>
  <div class="b-text flex flex-col gap-2">
    <SanityContent :value="textContent" />
  </div>
</template>
<script setup lang="ts">
  import type { PortableTextBlock } from "@portabletext/types";

  defineProps<{
    textContent: PortableTextBlock[];
  }>();
</script>
