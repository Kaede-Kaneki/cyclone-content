<template>
  <header class="sticky top-0 flex items-center h-14 sm:px-6 lg:px-8 px-4 bg-white/75 dark:bg-black/75 backdrop-blur-md lg:shadow z-30">
    <Logo />
    <div class="flex-1" />
    <Search class="hidden md:flex lg:flex" />
    <Navbar />
    <ColorMode />
  </header>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import ColorMode from './ColorMode.vue'
import Navbar from './Navbar.vue'
import Search from '@/components/widgets/Search/index.vue'
</script>

<style scoped lang="scss">

</style>
