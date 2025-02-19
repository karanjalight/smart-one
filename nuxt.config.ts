export default defineNuxtConfig({
  app: {
    baseURL: "/", // Ensure this is correctly set
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@nuxt/image",
  ],
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
      plugins: [require("flowbite/plugin")], // Move Flowbite here
    },
  },
  image: {
    // Image optimization options
  },
  pwa: {
    manifest: {
      name: "Smart One",
      short_name: "Smart One",
      description: "Water Bill Management System",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/logo.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    registerType: "autoUpdate",
    workbox: {
      globDirectory:
        process.env.NODE_ENV === "production"
          ? ".output/public" // Production
          : ".nuxt/dist", // Development
      globPatterns: ["**/*.{js,css,html,png,svg,ico,json,woff2}"],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === self.location.origin,
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "local-assets-cache",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 86400, // Cache for 1 day
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  compatibilityDate: "2025-02-18",
});
