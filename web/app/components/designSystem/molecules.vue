<script setup lang="ts">
import { ref } from 'vue'
import Pagination from '~/components/molecules/Pagination.vue'

const currentComponentPage = ref(2)
</script>

<template>
  <section class="space-y-8">
    <div>
      <p class="mb-2 text-sm font-medium text-blue-600">
        02 / Compositions simples
      </p>
      <h2 class="text-2xl font-bold sm:text-3xl">
        Molecules
      </h2>
      <p class="mt-2 text-gray-600">
        Petits assemblages d’éléments qui remplissent une fonction précise.
      </p>
    </div>
    <article class="rounded-xl border border-gray-200 bg-white p-6">
      <h3 class="mb-4 font-semibold">
        Pagination
      </h3>
      <Pagination
        :total="50"
        :per-page="10"
        :current-page="currentComponentPage"
        @update:current-page="currentComponentPage = $event"
        @update:previous="currentComponentPage = $event"
        @update:next="currentComponentPage = $event"
      />
      <p class="text-center text-sm text-gray-500">
        Page {{ currentComponentPage }} sur 5
      </p>
    </article>
    <p class="text-sm text-gray-500">
      Autres composants disponibles : NewsCard et PushNewsletter. Le formulaire de newsletter dépend
      d’ALTCHA et n’est pas lancé dans cet aperçu.
    </p>
  </section>
</template>
