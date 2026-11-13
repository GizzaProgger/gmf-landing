// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/gmf-landing/'
  },

  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/global.scss'
  ],

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@artmizu/nuxt-prometheus',
    '@nuxtjs/seo'
  ]
})
