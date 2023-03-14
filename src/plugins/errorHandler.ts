import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err: unknown) => {
    console.log('errorHandler =>', err)
  }
})
