export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt", "@vueuse/nuxt"],
  unocss: {
    preflight: true,
  },
  content: {
    highlight: {
      theme: {
        default: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
  },
});
