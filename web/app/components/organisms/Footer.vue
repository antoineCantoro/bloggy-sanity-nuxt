<template>
  <footer class="o-footer flex flex-col space-y-4 p-16">

    <!-- Top section -->
    <div class="flex justify-between space-x-4">
      <div class="flex items-center space-x-4">
        <Logo />
        <p class="font-bold">Footer content shared across all pages</p>
      </div>
      <ul class="flex space-x-4">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>

        <li><a href="#">Insta</a></li>
        <li><a href="#">Github</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>

    <hr />

    <!-- Bottom section -->
    <div class="flex justify-between space-x-4">
      <p class="font-bold">© 2026 STACK. ALL RIGHTS RESERVED.</p>
      <ul class="flex items-center space-x-4">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
    </div>

  </footer>
</template>

<script setup lang="ts">
import Logo from '~/components/atoms/AppLogo.vue'
</script>

<style scoped>
.o-footer {
  svg {
    width: 100px;
    height: 40px;
  }
}
</style>
