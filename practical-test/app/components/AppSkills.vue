<script setup>
import java from '../assets/icons/java.svg'
import mysql from '../assets/icons/mysql.svg'
import laravel from '../assets/icons/laravel.svg'
import javascript from '../assets/icons/javascript.svg'
import htmlIcon from '../assets/icons/html_.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
const skills = [
  { icono: java, label: 'Java', link: 'https://www.java.com/es/' },
  { icono: mysql, label: 'MySQL', link: 'https://www.mysql.com/' },
  { icono: laravel, label: 'Laravel', link: 'https://laravel.com/' },
  {
    icono: javascript,
    label: 'JavaScipt',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  {
    icono: htmlIcon,
    label: 'HTML',
    link: 'https://developer.mozilla.org/es/docs/Web/HTML',
  },
  { icono: bootstrap, label: 'Bootstrap', link: 'https://getbootstrap.com/' },
]
</script>
<template>
  <section
    class="bg-about-bg min-h-[50vh] flex flex-col items-center justify-center pb-24"
    aria-label="Skills"
  >
    <h2
      class="tracking-wider font-semibold text-project-text pt-16 pb-10"
      aria-label="Stack Tecnológico"
    >
      STACK TECNOLÓGICO
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 gap-8 mx-6">
      <AppCardSkill
        aria-label="Stack Tecnológico"
        v-for="skill in skills"
        :key="skill.label"
        :link="skill.link"
        :icono="skill.icono"
        :label="skill.label"
      />
    </div>
  </section>
</template>
