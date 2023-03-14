import { defineNuxtPlugin, isMobile } from '#imports'

export default defineNuxtPlugin(() => {
  if (process.client && process.env.NODE_ENV === 'development' && isMobile()) {
    (() => {
      // 引入调试能力
      const script = document.createElement('script')
      script.src = 'https://cdn.bootcss.com/eruda/2.10.0/eruda.min.js'
      document.body.appendChild(script)
      script.onload = () => (<any>window).eruda.init()
    })()
  }
})
