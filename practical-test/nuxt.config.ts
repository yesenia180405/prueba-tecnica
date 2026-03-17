import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader' // <-- IMPORTA EL PLUGIN

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  vite: {
    plugins: [svgLoader()], // <-- AQUÍ LO AGREGAS
  },
})
