import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    head: {
      title: 'Yesenia Toro | Portfolio',
      htmlAttrs: { lang: 'es' },
      meta: [
        {
          name: 'description',
          content:
            'A web developer with a passion for front-end and back-end development, constantly updating my skills to create comprehensive, modern and functional applications that make a difference.',
        },
        { name: 'author', content: 'Yesenia Toro' },
        { property: 'og:title', content: 'Yesenia Toro | Portfolio' },
        {
          property: 'og:description',
          content:
            'Web developer passionate about frontend and backend, building modern and functional applications.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
})
