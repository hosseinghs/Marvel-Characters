// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    marvelPrivateApiKey: process.env.NUXT_MARVEL_PRIVATE_API_KEY,
    public: {
      apiUrl: process.env.NUXT_MARVEl_API_URL,
      marvelPublicApiKey: process.env.NUXT_MARVEL_PUBLIC_API_KEY,
    }
  }
})