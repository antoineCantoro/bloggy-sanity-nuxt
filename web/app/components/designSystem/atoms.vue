<script setup lang="ts">
import AppButton from '~/components/atoms/Button.vue'
import AppLogo from '~/components/atoms/AppLogo.vue'
import Badge from '~/components/atoms/Badge.vue'

// Icons
import { Camera } from '@lucide/vue';
import { ArrowRight } from '@lucide/vue';
const badgeTypes = ['default', 'selected'] as const
</script>

<template>
  <section class="space-y-8">
    <div>
      <p class="mb-2 text-sm font-medium text-blue-600">
        01 / Composants fondamentaux
      </p>
      <h2 class="text-2xl font-bold sm:text-3xl">
        Atoms
      </h2>
      <p class="mt-2 text-gray-600">
        Éléments d’interface de base, réutilisables seuls.
      </p>
    </div>
    <div class="grid gap-5 sm:grid-cols-2">
      <article class="rounded-sm border border-gray-200 bg-white p-6">
        <h3 class="mb-5 font-semibold">
          AppLogo
        </h3>
        <AppLogo />
        <p class="mt-5 text-sm text-gray-500">
          Logo de la marque sous forme de SVG.
        </p>
      </article>
      <article class="rounded-sm border border-gray-200 bg-white p-6 flex flex-row flex-wrap gap-2">
        <h3 class="mb-5 font-semibold w-full">
          Button
        </h3>
        <AppButton href="#atoms" type="primary">
          Read article <ArrowRight :size="16" />
        </AppButton>
        <AppButton href="#atoms" type="secondary">
          View all articles
        </AppButton>
        <p class="mt-5 text-sm text-gray-500 w-full">
          Lien stylisé avec les classes de bouton du projet.
        </p>
      </article>
      <article class="rounded-sm border border-gray-200 bg-white p-6">
        <h3 class="mb-5 font-semibold">
          Badge
        </h3>
        <div class="flex gap-2">
          <Badge type="default">Default</Badge>
          <Badge type="selected">Selected</Badge>
        </div>
        <p class="mt-5 text-sm text-gray-500">
          Étiquettes stylisées pour indiquer des états ou des catégories.
        </p>
      </article>
    </div>
  </section>
</template>
