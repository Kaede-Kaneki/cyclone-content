<template>
  <Transition name="cy-fade-in">
    <button
      v-if="visible" class="fixed right-10 bottom-14 w-10 h-10 rounded-md bg-base-hover-color active:opacity-80"
      @click.stop="handleBackTop">
      <slot />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from '#imports'

const cubic = (value: number) => Math.pow(value, 3)
const easeInOutCubic = (value: number) => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

const el = ref<HTMLElement>()
const container = ref<HTMLDocument>()
const visible = ref<boolean>(false)

const emit = defineEmits(['click'])

onMounted(() => {
  init()
  container.value?.addEventListener('scroll', backTopScroll)
})

const init = () => {
  if (document) {
    container.value = document
    el.value = document.documentElement
  }
}
const backTopScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  scrollTop > 150 ? visible.value = true : visible.value = false
}
const scrollTop = () => {
  const el2 = el.value
  if (el2) {
    const beginTime = Date.now()
    const beginValue = el2.scrollTop
    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        el2.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        rAF(frameFunc)
      } else {
        el2.scrollTop = 0
      }
    }
    rAF(frameFunc)
  }
}
const handleBackTop = () => {
  scrollTop()
  emit('click')
}

onBeforeUnmount(() => {
  container.value?.removeEventListener('scroll', backTopScroll)
})
</script>

<style scoped lang="scss">
.cy-fade-in-enter-active,
.cy-fade-in-leave-active {
  transition: all .3s cubic-bezier(.55, 0, .1, 1);
}

.cy-fade-in-enter-from,
.cy-fade-in-leave-active {
  opacity: 0;
}
</style>
