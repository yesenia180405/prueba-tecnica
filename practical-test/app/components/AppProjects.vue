<script setup>
import serena from '../assets/img/serena.png'
import notasApp from '../assets/img/notasApp.png'
const proyectos = [
  {
    img: serena,
    tags: ['JavaScript', 'NodeJS', 'Tailwind CSS'],
    name: 'Serena',
    description:
      'A free web-based platform providing psychological support for students, accessible online through digital tools and professional guidance.',
    link: 'https://proyectoserena.vercel.app/login',
  },
  {
    img: notasApp,
    tags: ['JavaScript', 'HTML', 'CSS'],
    name: 'Smart Board',
    description:
      'A Single Page Application (SPA) for creating, filtering, and persisting notes and reminders using Web Storage, featuring auxiliary window support and dynamic DOM manipulation.',
    link: 'https://github.com/Jhonttt/dwec-u3-notasapp-atahona-toro.git',
  },
  {
    img: serena,
    tags: ['Angular', 'Laravel', 'Bootstrap'],
    name: 'Project repository',
    description:
      'A full-stack platform featuring an admin dashboard, user authentication, deployment on a live server, and database integration, designed to efficiently manage application data.',
    link: 'https://github.com/Jhonttt/proyecto-intermodular.git',
  },
]
</script>
<template>
  <section
    class="bg-project-bg min-h-[40vw] md:p-20 p-8 pt-20"
    aria-label="Contenido de los proyectos"
  >
    <p class="text-button-hover pb-4 font-medium tracking-widest md:pl-28">
      PORTFOLIO
    </p>
    <h2
      aria-label="Proyectos"
      class="text-4xl font-bold tracking-wider pb-7 md:pl-28"
    >
      <span class="text-project-text">Featured </span
      ><span class="text-home-underline"> Projects</span>
    </h2>
    <section
      class="flex flex-col md:flex-row flex-wrap md:gap-8 items-center md:justify-center"
    >
      <AppCard
        v-for="project in proyectos"
        :img="project.img"
        :tags="project.tags"
        :title="project.name"
        :description="project.description"
        :link="project.link"
      >
      </AppCard>
    </section>
  </section>
</template>
