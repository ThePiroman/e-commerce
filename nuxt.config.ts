// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts'],
  css: [
    '~/main.css',
  ],
  runtimeConfig: {
    public: {
      fetchAddress: import.meta.env.NUXT_FETCH_ADDRESS
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/mixins.scss";`
        }
      }
    }
  }
})