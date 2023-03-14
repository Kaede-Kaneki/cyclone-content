<template>
  <div class="text-2xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-br from-green-400 via-emerald-400 to-cyan-400 animate-roll cursor-pointer select-none">
    Cyclone
  </div>
<!--  <nuxt-link to="/">-->
<!--    <canvas ref="refCanvas" width="100" height="56"></canvas>-->
<!--  </nuxt-link>-->
</template>

<script setup lang="ts">
import { onMounted, ref } from '#imports'

const refCanvas = ref<HTMLCanvasElement | null>()

onMounted(() => {
  useCanvas()
})

const useCanvas = () => {
  const canvas = refCanvas.value
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.font = '20px serif'
      ctx.textAlign = 'center'
      ctx.fillText('Cyclone', 50, 32)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
