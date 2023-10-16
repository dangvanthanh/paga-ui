import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo:wght@700&display=swap'}
      ],
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  alias: {
    "styled-system": resolve("./styled-system"),
  },
  css: ["@/assets/css/global.css", "@/assets/css/style.css"],
  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },
});