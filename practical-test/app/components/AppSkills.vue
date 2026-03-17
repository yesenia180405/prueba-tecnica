<script setup>
import java from '../assets/img/java.svg'
import mysql from '../assets/img/mysql.svg'
import laravel from '../assets/img/laravel.svg'
import javascript from '../assets/img/javascript.svg'
import htmlIcon from '../assets/img/html_.svg'
import bootstrap from '../assets/img/bootstrap.svg'
const skills = [
  { icono: java, label: 'Java' },
  { icono: mysql, label: 'MySQL' },
  { icono: laravel, label: 'Laravel' },
  { icono: javascript, label: 'JavaScipt' },
  { icono: htmlIcon, label: 'HTML' },
  { icono: bootstrap, label: 'Bootstrap' },
]
</script>
<template>
  <section
    class="bg-about-bg min-h-[50vh] flex flex-col items-center justify-center pb-24"
    aria-label="Skills"
  >
    <h2
      class="tracking-wider font-semibold text-project-text text+center pt-16 sm:pb-10"
      aria-label="Stack Tecnológico"
    >
      STACK TECNOLÓGICO
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-8">
      <AppCardSkill
        v-for="skill in skills"
        :key="skill.label"
        :icono="skill.icono"
        :label="skill.label"
      />
    </div>
  </section>
</template>
