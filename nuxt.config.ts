// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})

import "./app/ApiRoot.ts"
import "./app/BuildClient.ts"
import "./app/Products.ts"