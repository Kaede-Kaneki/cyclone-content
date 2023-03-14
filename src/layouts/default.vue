<template>
  <div id="_layout">
    <NuxtLoadingIndicator :throttle="100" />
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="min-h-[calc(100vh-3.5rem)] flex flex-col">
        <div class="relative flex-1">
          <slot />
        </div>
      </main>
    </div>
    <BackTop>Top</BackTop>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
