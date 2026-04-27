// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/apollo'],
  css: [
    '~/main.css',
  ],
  runtimeConfig: {
    public: {
      fetchAddress: import.meta.env.NUXT_FETCH_ADDRESS
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://your-api.com/graphql'
      }
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