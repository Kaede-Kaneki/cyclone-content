<template>
  <section class="relative lg:pt-8">
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-10">
          <div class="flex flex-col relative lg:grid lg:grid-cols-10">
            <aside
              class="col-span-2 col-start-2 p-3 sticky top-14 border-b lg:border-none border-dashed backdrop-blur-md bg-white/75 dark:bg-black/75 lg:max-h-[calc(100vh-64px)]">
              <button class="flex lg:hidden" type="button" @click="isShow = !isShow">分类</button>
              <ul class="sticky top-14 lg:block max-h-[300px] overflow-y-auto" :class="isShow ? '' : 'hidden'">
                <nuxt-link
                  class="flex lg:justify-center px-1 py-2 cursor-pointer hover:bg-base-hover-color/40"
                  v-for="item in articleList"
                  :key="item"
                  :to="item === 'index' ? '/' : item"
                >{{ item }}
                </nuxt-link>
              </ul>
            </aside>
            <div class="col-span-10 lg:col-span-6">
              <ContentDoc class="p-4">
                <template #empty>
                  <div>empty</div>
                </template>
                <template #not-found>
                  <div>not found</div>
                </template>
              </ContentDoc>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isShow = ref<boolean>(false)
const articleList = []
const modules = import.meta.glob('src/content/*.md', { as: 'raw' })
for (const path in modules) {
  // modules[path]().then((mod) => {
  //   console.log(mod)
  // })
  articleList.push(path.split('/content/')[1].split('.')[0])
}

</script>

<style scoped lang="scss">

</style>
