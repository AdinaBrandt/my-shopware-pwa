import extendNuxtConfig from "@shopware-pwa/nuxt-module/config"

export default extendNuxtConfig({
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  head: {
    title: "Shopware PWA",
    meta: [{ hid: "description", name: "description", content: "" }],
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
})
