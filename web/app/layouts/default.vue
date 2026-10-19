<template>
  <div>
    <Header />
    <slot />
    <PushNewsletter />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/organisms/Header.vue'
import Footer from '~/components/organisms/Footer.vue'
import PushNewsletter from '~/components/molecules/PushNewsletter.vue'
</script>
