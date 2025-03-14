import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  devtools: {enabled: false},

  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      'v-gsap-nuxt',
      'nuxt-typed-router',
      'nuxt-mdi',
  ],

  compatibilityDate: '2025-02-25',
})