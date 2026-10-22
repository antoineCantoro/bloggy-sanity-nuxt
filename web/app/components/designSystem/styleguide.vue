<script setup lang="ts">
defineProps({
  copiedClass: {
    type: String,
    default: ''
  }
})
defineEmits(['copyClass'])

const colors = [
  { name: 'Bleu principal', token: 'blue-500', value: '#2455F5', class: 'bg-blue-500' },
  { name: 'Bleu clair', token: 'blue-100', value: '#EDF1FF', class: 'bg-blue-100' },
  { name: 'Vert', token: 'green-500', value: '#00C16A', class: 'bg-green-500' },
  { name: 'Vert profond', token: 'green-800', value: '#016538', class: 'bg-green-800' },
  { name: 'Encre', token: 'black', value: '#181A1E', class: 'bg-black' },
  { name: 'Surface bleutée', token: 'gray-200', value: '#EDF1FF', class: 'bg-gray-200' }
]

const fontFamilies = [
  { name: 'PP Neue Montreal, sans-serif', class: 'font-sans', sampleClass: 'font-sans' },
  { name: 'IBM Plex Mono, monospace', class: 'font-mono', sampleClass: 'font-mono' }
]

const fontSizes = [
  { name: 'text-xs', size: '12 px', class: 'text-xs' },
  { name: 'text-sm', size: '14 px', class: 'text-sm' },
  { name: 'text-base', size: '16 px', class: 'text-base' },
  { name: 'text-lg', size: '18 px', class: 'text-lg' },
  { name: 'text-xl', size: '20 px', class: 'text-xl' },
  { name: 'text-2xl', size: '24 px', class: 'text-2xl' },
  { name: 'text-3xl', size: '30 px', class: 'text-3xl' },
  { name: 'text-4xl', size: '36 px', class: 'text-4xl' },
  { name: 'text-5xl', size: '48 px', class: 'text-5xl' },
  { name: 'text-6xl', size: '60 px', class: 'text-6xl' }
]

const radii = [
  { name: 'rounded-xs', class: 'rounded-xs', value: '2 px' },
  { name: 'rounded-sm', class: 'rounded-sm', value: '4 px' },
  { name: 'rounded', class: 'rounded', value: '4 px' },
  { name: 'rounded-md', class: 'rounded-md', value: '6 px' },
  { name: 'rounded-lg', class: 'rounded-lg', value: '8 px' },
  { name: 'rounded-xl', class: 'rounded-xl', value: '12 px' },
  { name: 'rounded-2xl', class: 'rounded-2xl', value: '16 px' },
  { name: 'rounded-3xl', class: 'rounded-3xl', value: '24 px' },
  { name: 'rounded-4xl', class: 'rounded-4xl', value: '32 px' },
  { name: 'rounded-full', class: 'rounded-full', value: '9999 px' }
]

const spacings = [
  { name: '1', class: 'p-1', pixels: '4 px', width: 4 },
  { name: '2', class: 'p-2', pixels: '8 px', width: 8 },
  { name: '4', class: 'p-4', pixels: '16 px', width: 16 },
  { name: '6', class: 'p-6', pixels: '24 px', width: 24 },
  { name: '8', class: 'p-8', pixels: '32 px', width: 32 },
  { name: '12', class: 'p-12', pixels: '48 px', width: 48 },
  { name: '16', class: 'p-16', pixels: '64 px', width: 64 },
  { name: '24', class: 'p-24', pixels: '96 px', width: 96 }
]
</script>

<template>
  <div class="space-y-20">
    <section aria-labelledby="colors-title">
      <div class="mb-7 flex items-end justify-between gap-4">
        <div>
          <p class="mb-2 text-sm font-medium text-blue-600">
            01 / Palette
          </p>
          <h2
            id="colors-title"
            class="text-2xl font-bold sm:text-3xl"
          >
            Couleurs
          </h2>
        </div>
        <p class="hidden text-sm text-gray-500 sm:block">
          Teintes définies dans le thème du projet
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <button
          v-for="color in colors"
          :key="color.token"
          type="button"
          class="w-full cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white text-left transition hover:border-blue-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          :aria-label="`Copier la classe ${color.class}`"
          @click="$emit('copyClass', color.class)"
        >
          <div
            class="aspect-square"
            :style="{ backgroundColor: color.value }"
          />
          <div class="p-4">
            <h3 class="font-semibold">
              {{ copiedClass === color.class ? 'Copié !' : color.name }}
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              {{ color.class }}
            </p>
            <p class="mt-3 font-mono text-xs text-gray-600">
              {{ color.value }}
            </p>
          </div>
        </button>
      </div>
    </section>

    <section aria-labelledby="type-title">
      <div class="mb-7">
        <p class="mb-2 text-sm font-medium text-blue-600">
          02 / Caractères
        </p>
        <h2
          id="type-title"
          class="text-2xl font-bold sm:text-3xl"
        >
          Typographie
        </h2>
      </div>

      <div class="grid gap-5 lg:grid-cols-[1fr_2fr]">
        <div class="grid content-start gap-3">
          <button
            v-for="fontFamily in fontFamilies"
            :key="fontFamily.class"
            type="button"
            class="rounded-xl bg-gray-950 p-6 text-left text-white transition hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:p-8"
            :aria-label="`Copier la classe ${fontFamily.class}`"
            @click="$emit('copyClass', fontFamily.class)"
          >
            <p class="text-sm text-gray-400">
              Famille de police
            </p>
            <p
              class="mt-4 text-4xl font-semibold tracking-tight"
              :class="fontFamily.sampleClass"
            >
              Aa
            </p>
            <h3 class="mt-3 text-xl font-semibold">
              {{ copiedClass === fontFamily.class ? 'Copié !' : fontFamily.name }}
            </h3>
            <code class="mt-2 block text-sm text-gray-400">{{ fontFamily.class }}</code>
          </button>
        </div>

        <article class="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
          <div class="mb-5 flex items-baseline justify-between">
            <h3 class="font-semibold">
              Échelle des tailles
            </h3>
            <span class="text-xs text-gray-500">Tailwind par défaut</span>
          </div>
          <div class="divide-y divide-gray-100">
            <button
              v-for="fontSize in fontSizes"
              :key="fontSize.name"
              type="button"
              class="grid w-full cursor-pointer grid-cols-[5rem_1fr_4rem] items-baseline gap-3 py-3 text-left transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-600"
              :aria-label="`Copier la classe ${fontSize.class}`"
              @click="$emit('copyClass', fontSize.class)"
            >
              <code class="text-xs text-blue-600">
                {{ copiedClass === fontSize.class ? 'Copié !' : fontSize.name }}
              </code>
              <span
                :class="fontSize.class"
                class="truncate font-medium"
              >Aa — Un regard neuf</span>
              <span class="text-right text-xs text-gray-500">{{ fontSize.size }}</span>
            </button>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="spacing-title">
      <div class="mb-7">
        <p class="mb-2 text-sm font-medium text-blue-600">
          03 / Rythme
        </p>
        <h2
          id="spacing-title"
          class="text-2xl font-bold sm:text-3xl"
        >
          Espacements
        </h2>
        <p class="mt-2 text-gray-600">
          Échelle de base Tailwind : 1 unité = 4 px. Cliquez sur une ligne pour copier sa classe de padding.
        </p>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5 sm:p-8">
        <div class="space-y-4">
          <button
            v-for="spacing in spacings"
            :key="spacing.name"
            type="button"
            class="grid w-full cursor-pointer grid-cols-[4rem_1fr_4rem] items-center gap-4 rounded-md text-left transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-600"
            :aria-label="`Copier la classe ${spacing.class}`"
            @click="$emit('copyClass', spacing.class)"
          >
            <code class="text-sm text-blue-600">
              {{ copiedClass === spacing.class ? 'Copié !' : spacing.class }}
            </code>
            <div class="h-3 rounded-full bg-gray-100">
              <div
                class="h-3 rounded-full bg-blue-500"
                :style="{ width: `${spacing.width}px`, maxWidth: '100%' }"
              />
            </div>
            <span class="text-right text-sm text-gray-500">{{ spacing.pixels }}</span>
          </button>
        </div>
      </div>
    </section>

    <section aria-labelledby="radius-title">
      <div class="mb-7">
        <p class="mb-2 text-sm font-medium text-blue-600">
          04 / Formes
        </p>
        <h2
          id="radius-title"
          class="text-2xl font-bold sm:text-3xl"
        >
          Rayons
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        <button
          v-for="radius in radii"
          :key="radius.name"
          type="button"
          class="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4 text-left transition hover:border-blue-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          :aria-label="`Copier la classe ${radius.name}`"
          @click="$emit('copyClass', radius.class)"
        >
          <div class="mb-4 flex h-20 items-center justify-center bg-gray-50">
            <div
              :class="radius.class"
              class="size-12 bg-blue-500"
            />
          </div>
          <code class="text-xs text-gray-600">
            {{ copiedClass === radius.class ? 'Copié !' : radius.name }}
          </code>
          <p class="mt-1 text-xs text-gray-500">
            {{ radius.value }}
          </p>
        </button>
      </div>
    </section>

    <section aria-labelledby="grid-title">
      <div class="mb-7">
        <p class="mb-2 text-sm font-medium text-blue-600">
          05 / Structure
        </p>
        <h2
          id="grid-title"
          class="text-2xl font-bold sm:text-3xl"
        >
          Grille responsive
        </h2>
        <p class="mt-2 text-gray-600">
          Exemple sur 12 colonnes, avec une gouttière de 16 px.
        </p>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5 sm:p-8">
        <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-12">
          <div
            v-for="column in 12"
            :key="column"
            class="flex h-24 items-end justify-center rounded-md bg-blue-100 p-2 text-xs font-medium text-blue-700"
          >
            {{ column }}
          </div>
        </div>
        <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <span><strong class="text-gray-950">Mobile</strong> · 4 colonnes</span>
          <span><strong class="text-gray-950">Tablette</strong> · 8 colonnes</span>
          <span><strong class="text-gray-950">Desktop</strong> · 12 colonnes</span>
        </div>
      </div>
    </section>
  </div>
</template>
