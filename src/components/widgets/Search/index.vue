<template>
  <form
    class="a select-none flex p-1 w-56 h-10 border-box rounded-md border hover:border-slate-400 hover:duration-200 hover:ease-in-out transition-all"
    :class="{ 'w-72': isFocus, 'hover:focus-within:border-green-400 focus-within:border-green-400': isFocus }"
    @submit.prevent="handleSearchSubmit">
    <div class="b rounded-md p-1 focus-within:bg-base-hover-color flex-1">
      <input
        class="ml-1 outline-none bg-transparent w-full flex-1" type="search" maxlength="15" ref="refInput"
        @focusin="isFocus = true" @focusout="isFocus = false" v-model="inputValue" :placeholder="props.placeHolder">
    </div>
    <button
      class="w-8 ml-1 h-full rounded-md hover:bg-base-hover-color hover:duration-200 hover:ease-in-out"
      type="submit">
      <i class="iconfont icon-sousuo" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { searchProps } from './types'
import { ref } from '#imports'

const refInput = ref<HTMLInputElement>()
const inputValue = ref<string>('')
const isFocus = ref<boolean>(false)

const props = defineProps(searchProps)

const handleSearchSubmit = () => {
  if (!inputValue.value) { return }
  console.log('handleSearchSubmit =>', inputValue.value)
  return 132456
}
</script>

<style scoped lang="scss">

</style>
