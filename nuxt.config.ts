// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'SMART ONE',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Water Smart | Payments | People-Management' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ], // ✅ Added missing comma

  pwa: {
    manifest: {
      name: 'Smart One',
      short_name: 'Smart One', // ✅ Fixed "shortname" to "short_name"
      description: 'Water Bill Management System',
      theme_color: '#fff',
      icons: [
        {
          src: 'logo.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,json,woff2}'], // Cache only valid files
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === self.location.origin,  // Cache local assets
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'local-assets-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 86400, // Cache for 1 day
            }
          }
        }
      ]
    }
    // workbox for production
    // workbox: {
    //   globPatterns: ['**/*.{js,css,html,png,svg,ico,json,woff2}'], // ✅ Ensure correct files
    //   navigateFallback: '/', 
    //   runtimeCaching: [
    //     {
    //       urlPattern: /^https:\/\/your-api-url\.com\/.*/,  // Adjust this for API caching
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'api-cache',
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 86400, // Cache API calls for a day
    //         }
    //       }
    //     }
    //   ]
    // }
  }
});
