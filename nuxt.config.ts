import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  // nitro: {
  //   preset: 'service-worker'
  // },
  alias: {
    src: resolve('src'),
    '@': resolve('src')
  },
  srcDir: 'src',
  modules: [
    '@nuxt/content'
  ],
  content: {},
  app: {
    baseURL: '/cyclone-content/',
    head: {
      title: 'Cyclone',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover' },
        { name: 'theme-color', content: '#4fc08d' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      style: [],
      script: [],
      noscript: [],
      charset: 'utf-8',
      htmlAttrs: { lang: 'zh' }
    }
  }
})
