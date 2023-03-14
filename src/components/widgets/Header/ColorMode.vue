<template>
  <button
    type="button"
    class="w-10 h-10 flex items-center justify-center text-[20px] rounded-md box-border text-base-color bg-base-hover-color cursor-pointer select-none hover:text-base-hover-color"
    @click="ModeToggle">
    <i class="iconfont" :class="`icon-${$colorMode.preference}`" />
  </button>
</template>

<script setup lang="ts">
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const ModeToggle = () => {
  colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
}
</script>

<style scoped lang="scss">

</style>
