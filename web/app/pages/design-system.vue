<script setup lang="ts">
import { nextTick, ref } from 'vue'
import Styleguide from '~/components/designSystem/styleguide.vue'
import Atoms from '~/components/designSystem/atoms.vue'
import Molecules from '~/components/designSystem/molecules.vue'
import Blocks from '~/components/designSystem/blocks.vue'
import Organisms from '~/components/designSystem/organisms.vue'

const tabs = [
  { id: 'styleguide', label: 'Styleguide' },
  { id: 'atoms', label: 'Atoms' },
  { id: 'molecules', label: 'Molecules' },
  { id: 'blocks', label: 'Blocks' },
  { id: 'organisms', label: 'Organisms' }
]

const activeTab = ref('styleguide')
const copiedClass = ref('')
const copyError = ref('')

/** @param {string} className */
async function copyClass(className) {
  try {
    await navigator.clipboard.writeText(className)
    copiedClass.value = className
    copyError.value = ''
  } catch (error) {
    copyError.value = `Impossible de copier « ${className} ». Vérifie les autorisations du presse-papiers du navigateur.`
    console.error('Échec de la copie de la classe Tailwind :', error)
  }
}

/** @param {number} direction */
async function moveTab(direction) {
  const currentIndex = tabs.findIndex(tab => tab.id === activeTab.value)
  const nextIndex = (currentIndex + direction + tabs.length) % tabs.length
  activeTab.value = tabs[nextIndex].id
  await nextTick()
  document.getElementById(`tab-${activeTab.value}`)?.focus()
}
</script>

<template>
  <main class="min-h-screen bg-gray-50 text-gray-950">
    <div class="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <header class="mb-16 border-b border-gray-200 pb-10">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Référentiel visuel · 2026
        </p>
        <h1 class="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Design system
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Couleurs de marque et échelle Tailwind par défaut, présentées sans modifier ses tokens.
        </p>
        <p
          v-if="copyError"
          role="alert"
          class="mt-4 text-sm text-red-700"
        >
          {{ copyError }}
        </p>
      </header>

      <nav
        aria-label="Sections du design system"
        role="tablist"
        class="mb-12 flex gap-2 overflow-x-auto border-b border-gray-200"
      >
        <button
          v-for="tab in tabs"
          :id="`tab-${tab.id}`"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`panel-${tab.id}`"
          :tabindex="activeTab === tab.id ? 0 : -1"
          class="shrink-0 cursor-pointer border-b-2 px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-blue-600"
          :class="activeTab === tab.id
            ? 'border-blue-500 text-blue-500'
            : 'border-transparent text-gray-500 hover:text-gray-400'"
          @click="activeTab = tab.id"
          @keydown.right.prevent="moveTab(1)"
          @keydown.left.prevent="moveTab(-1)"
        >
          {{ tab.label }}
        </button>
      </nav>

      <Styleguide
        v-if="activeTab === 'styleguide'"
        id="panel-styleguide"
        role="tabpanel"
        aria-labelledby="tab-styleguide"
        :copied-class="copiedClass"
        @copy-class="copyClass"
      />
      <Atoms
        v-else-if="activeTab === 'atoms'"
        id="panel-atoms"
        role="tabpanel"
        aria-labelledby="tab-atoms"
      />
      <Molecules
        v-else-if="activeTab === 'molecules'"
        id="panel-molecules"
        role="tabpanel"
        aria-labelledby="tab-molecules"
      />
      <Blocks
        v-else-if="activeTab === 'blocks'"
        id="panel-blocks"
        role="tabpanel"
        aria-labelledby="tab-blocks"
      />
      <Organisms
        v-else
        id="panel-organisms"
        role="tabpanel"
        aria-labelledby="tab-organisms"
      />

      <footer class="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-500">
        Les échelles de tailles, espacements, rayons et grille utilisent les valeurs par défaut de Tailwind CSS.
      </footer>
    </div>
  </main>
</template>
