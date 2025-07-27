export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets-cache',
          }
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'image-cache',
          }
        },
        {
          urlPattern: ({ request }) => request.destination === 'font',
          handler: 'CacheFirst',
          options: {
            cacheName: 'font-cache',
          }
        }
      ]
    },
    manifest: {
      name: 'Nuxt Marvel App',
      short_name: 'MarvelApp',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#000000',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }
  },

  runtimeConfig: {
    marvelPrivateApiKey: process.env.NUXT_MARVEL_PRIVATE_API_KEY,
    public: {
      apiUrl: process.env.NUXT_MARVEL_API_URL,
      marvelPublicApiKey: process.env.NUXT_MARVEL_PUBLIC_API_KEY,
    }
  },

  routeRules: {
    '/': { isr: true },
    '/character/**': {
      ssr: true,
      prerender: true
    },
  }
})
