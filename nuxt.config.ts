// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'ЖК Сердце столицы | Volume',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'author', content: '' },
        { name: 'copyright', content: '' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'application-name', content: 'Nuxt 3' },
        { name: 'msapplication-tooltip', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-startup-image', href: '/startup.png' },
        { rel: 'apple-touch-icon', href: '/touch-icon-iphone.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/touch-icon-ipad.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/touch-icon-iphone-retina.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/touch-icon-ipad-retina.png' },
      ],
      bodyAttrs: {
        class: 'antialiased'
      },
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
