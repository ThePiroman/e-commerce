// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts'],
  css: [
    '~/main.css'
  ],
  runtimeConfig: {
    projectKey: import.meta.env.CTP_PROJECT_KEY,
    clientSecret: import.meta.env.CTP_CLIENT_SECRET,
    clientID: import.meta.env.CTP_CLIENT_ID,
    authURL: import.meta.env.CTP_AUTH_URL,
    apiURL: import.meta.env.CTP_API_URL,
    scopes: import.meta.env.CTP_SCOPES
  }
})