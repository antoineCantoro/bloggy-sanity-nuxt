<template>
  <div class="b-editorialCallout border-l-2 p-6 flex gap-5" :class="className">
    <Icon
      v-if="props.icon"
      :name="`lucide:${props.icon}`"
      class="size-6 shrink-0"
      :class="accentClassName"
      aria-hidden="true"
    />
    <div class="flex flex-col gap-2">
      <p class="font-mono text-xs" :class="accentClassName">{{ props.suptitle }}</p>
      <h3 class="text-xl font-semibold">{{ props.title }}</h3>
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps<{
    suptitle?: string;
    title?: string;
    text?: string;
    icon?: string;
    type?: 'info' | 'warning';
  }>();

  const className = computed(() => {
    return {
      'border-blue-500 bg-blue-100': props.type === 'info',
      'border-yellow-500 bg-yellow-100': props.type === 'warning'
    }
  })

  const accentClassName = computed(() => {
    return {
      'text-blue-500': props.type === 'info',
      'text-yellow-500': props.type === 'warning'
    }
  })
</script>
