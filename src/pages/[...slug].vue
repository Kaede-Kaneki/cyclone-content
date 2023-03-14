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
const modules = import.meta.glob('src/content/*.md')
const articleList = []
Object.keys(modules).forEach((v) => {
  articleList.push(v.split('/content/')[1].split('.')[0])
})
</script>

<style scoped lang="scss">

</style>
