// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],

  site: {
    url: "https://hydration.ihumbak.website",
    name: "Hydration Tracking Water App",
    description: "Hydration Tracking Water App",
    defaultLocale: 'en'
  },

  icon: {
    mode: "css",
    cssLayer: 'base'
  },
})
