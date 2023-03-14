<template>
  <div class="flex items-center justify-center m-auto px-6">
    <div class="flex-1">
      <ul v-for="item in articleList" :key="item">
        <li>
          <nuxt-link :to="item === 'index' ? '/' : item">{{ item }}</nuxt-link>
        </li>
      </ul>
    </div>
    <ContentDoc class="flex-[3]">
      <template #empty>
        <div>empty</div>
      </template>
      <template #not-found>
        <div>not found</div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const articleList = []
const modules = import.meta.glob('src/content/*.md', { as: 'raw' })
for (const path in modules) {
  articleList.push(path.split('/content/')[1].split('.')[0])
}
</script>

<style scoped lang="scss">

</style>
