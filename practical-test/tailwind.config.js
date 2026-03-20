/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}', './app.vue'],
  theme: {
    extend: {
      colors: {
        'home-text': 'rgb(193,158,229)',
        'home-underline': 'rgb(147,51,234)',
        'home-navbar': 'rgba(26,11,51,0.9)',
        'footer-b': 'rgb(26,11,51)',
        'hero-bg': 'rgb(59, 34, 106)',
        'button-hover': 'rgb(216, 180, 254)',
        'about-bg': 'rgb(243, 232, 255)',
        'hero-last': 'rgb(161,74,243)',
        'about-text': 'rgb(112, 73, 172)',
        'project-bg': 'rgb(245, 243, 255)',
        'project-text': 'rgb(76, 29, 149)',
        'card-bg': 'rgb(250, 248, 255)',
        'card-underline': 'rgb(244, 178, 214)',
        'card-tags': 'rgb(229, 209, 251)',
        'card-text': 'rgb(127, 94, 181)',
        'link-text': 'rgb(216, 180, 254)',
        'form-text': 'rgb(181, 163, 213)',
        'button-color': 'rgb(130, 37, 211)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
