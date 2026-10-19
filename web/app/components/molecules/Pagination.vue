<template>
  <nav>
    <ul class="flex space-x-2 px-8 py-7 items-center justify-center">
      <li>
        <button class=""
        :class="{ 'text-gray-500 cursor-not-allowed': props.currentPage === 1, 'cursor-pointer': props.currentPage !== 1 }"
        :disabled="props.currentPage === 1"
        @click="$emit('update:previous', props.currentPage - 1)">Previous</button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button class="font-mono size-[36px] rounded flex items-center justify-center cursor-pointer"
          :class="{ 'bg-blue-500 text-white': page === props.currentPage }"
          @click="$emit('update:currentPage', page)">{{ page }}</button>
      </li>
      <li>
        <button class="px-3 py-1 "
        :class="{ 'text-gray-500 cursor-not-allowed': props.currentPage === totalPages, 'cursor-pointer': props.currentPage !== totalPages }"
        :disabled="props.currentPage === totalPages"
        @click="$emit('update:next', props.currentPage + 1)">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  total: number;
  perPage: number;
  currentPage: number;
}>();

const totalPages = computed(() => {
  if (props.total && props.perPage) {
    return Math.ceil(props.total / props.perPage);
  }
  return 0;
});
</script>
