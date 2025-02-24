let backendURL = process.env.BACKEND_URL || "http://localhost:8000";

const EnvConfigs: {
  [key: string]: {
    apiEndPoint: string;
    paypalClientId: string;
    env: string;
  };
} = {
  development: {
    apiEndPoint: backendURL + "/api",
    paypalClientId:
      "AScIXetQlA8kASMe7yW0aOHbOSalPCs_ILSylSudOlPFDkNVrUZizzwoi4O01eN_QMptiZ9cySRzlI5g",
    env: "local",
  },
  staging: {
    apiEndPoint: "https://backendats.kaziquest.com/api",
    paypalClientId:
      "AScIXetQlA8kASMe7yW0aOHbOSalPCs_ILSylSudOlPFDkNVrUZizzwoi4O01eN_QMptiZ9cySRzlI5g",
    env: "staging",
  },
  production: {
    apiEndPoint: "https://ats-app.kaziquest.com/api",
    paypalClientId:
      "AcQuntxYMUMI0tGIlIEHL1cwVBuvaC5hJPjloiIofoDcfhxDnnPmjfwu8hYjnCsIkGVcmjIIdnUzLeAr",
    env: "production",
  },
};

let appEnv = process.env.APP_ENV || "development";
export default defineNuxtConfig({
  app: {
    baseURL: "/", // Ensure this is correctly set
  },
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: "123",
    // Config within public will be also exposed to the client
    public: {
      apiBase: EnvConfigs[appEnv].apiEndPoint,
    },
  },
  modules: [
    "@nuxt/ui",
    // "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@nuxt/image",
  ],
  css: ["sweetalert2/dist/sweetalert2.min.css", "~/assets/css/tailwind.css"],
  plugins: [{ src: "~/plugins/sweet-alert2.js", mode: "client" }],
  image: {
    // Image optimization options
  },
  // pwa: {
  //   manifest: {
  //     name: "Smart One",
  //     short_name: "Smart One",
  //     description: "Water Bill Management System",
  //     theme_color: "#ffffff",
  //     icons: [
  //       {
  //         src: "/logo.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "/logo.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   registerType: "autoUpdate",
  //   workbox: {
  //     globDirectory:
  //       process.env.NODE_ENV === "production"
  //         ? ".output/public" // Production
  //         : ".nuxt/dist", // Development
  //     globPatterns: ["**/*.{js,css,html,png,svg,ico,json,woff2}"],
  //     runtimeCaching: [
  //       {
  //         urlPattern: ({ url }) => url.origin === self.location.origin,
  //         handler: "StaleWhileRevalidate",
  //         options: {
  //           cacheName: "local-assets-cache",
  //           expiration: {
  //             maxEntries: 50,
  //             maxAgeSeconds: 86400, // Cache for 1 day
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module",
  //   },
  // },
  compatibilityDate: "2025-02-18",
});
