<template>
  <footer class="o-footer flex flex-col space-y-4 p-16">

    <!-- Top section -->
    <div class="flex justify-between space-x-4">
      <div class="flex items-center space-x-4">
        <Logo />
        <p class="text-sm text-gray-500">Footer content shared across all pages</p>
      </div>
      <ul class="flex space-x-4">
        <li v-for="item in primaryNav" :key="item.name">
          <a class="text-sm" :href="item.href" :target="item.target">{{ item.name }}</a>
        </li>
        <li v-for="item in socialNav" :key="item.name">
          <a class="text-sm" :href="item.href" :target="item.target">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <hr />

    <!-- Bottom section -->
    <div class="flex justify-between space-x-4">
      <p class="font-bold">© 2026 STACK. ALL RIGHTS RESERVED.</p>
      <ul class="flex items-center space-x-4">
        <li v-for="item in secondaryNav" :key="item.name">
          <a class="text-sm" :href="item.href" :target="item.target">{{ item.name }}</a>
        </li>
      </ul>
    </div>

  </footer>
</template>

<script setup lang="ts">
import Logo from '~/components/atoms/AppLogo.vue'

const currentYear = new Date().getFullYear()
const primaryNav = [
  { name: 'Link 1', href: '#', target: '_blank' },
  { name: 'Link 2', href: '#', target: '_blank' },
  { name: 'Link 3', href: '#', target: '_blank' },
]
const socialNav = [
  { name: 'Insta', href: '#', target: '_blank' },
  { name: 'Github', href: '#', target: '_blank' },
  { name: 'Twitter', href: '#', target: '_blank' },
]
const secondaryNav = [
  { name: 'Privacy', href: '#', target: '_blank' },
  { name: 'Terms', href: '#', target: '_blank' },
]
</script>

<style scoped>
.o-footer {
  svg {
    width: 100px;
    height: 40px;
  }
}
</style>
