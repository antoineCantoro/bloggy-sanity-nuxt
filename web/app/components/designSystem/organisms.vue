<script setup lang="ts">
import HeaderOrganism from '~/components/organisms/Header.vue'
import FooterOrganism from '~/components/organisms/Footer.vue'
</script>

<template>
  <section class="space-y-8 max-w-[744px]">
    <div>
      <p class="mb-2 text-sm font-medium text-blue-600">
        04 / Sections de page
      </p>
      <h2 class="text-2xl font-bold sm:text-3xl">
        Organisms
      </h2>
      <p class="mt-2 text-gray-600">
        Sections complètes composées de plusieurs éléments d’interface.
      </p>
    </div>
    <div class="space-y-6">
      <article class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="mb-4 font-semibold">
          Header
        </h3>
        <HeaderOrganism />
      </article>
      <article class="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div class="p-6">
          <h3 class="font-semibold">
            Footer
          </h3>
        </div>
        <FooterOrganism />
      </article>
    </div>
  </section>
</template>
