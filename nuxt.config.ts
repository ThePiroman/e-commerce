// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts', '@tailwindcss/postcss', 'shadcn-nuxt', '@nuxt/ui'],
  css: [
    '~/main.css',
  ],
  runtimeConfig: {
    public: {
      fetchAddress: process.env.NUXT_FETCH_ADDRESS
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "../mixins.scss";'
        }
      }
    }
  },
  app: {
    baseURL: '/e-commerce/'
  }
});