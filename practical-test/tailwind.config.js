/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}', './app.vue'],
  theme: {
    extend: {
      colors: {
        'home-text': 'rgb(193,158,229)',
        'home-underline': 'rgb(147,51,234)',
        'home-navbar': 'rgba(22,15,42,0.9)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
