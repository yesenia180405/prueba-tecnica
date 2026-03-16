<script setup>
import serena from '../assets/img/serena.png'
import notasApp from '../assets/img/notasApp.png'
const proyectos = [
  {
    img: serena,
    tags: ['JavaScript', 'NodeJS', 'Tailwind CSS'],
    name: 'Serena',
    description:
      'Plataforma web gratuita de apoyo psicológico para estudiantes, disponible en línea mediante herramientas digitales y acompañamiento profesional.',
    link: 'https://proyectoserena.vercel.app/login',
  },
  {
    img: notasApp,
    tags: ['JavaScript', 'HTML', 'CSS'],
    name: 'Tablón Inteligente TPI',
    description:
      'Aplicación web SPA que permite crear, filtrar y persistir notas/recordatorios mediante Web Storage, con soporte de ventana auxiliar, y control dinámico del DOM.',
    link: 'https://github.com/Jhonttt/dwec-u3-notasapp-atahona-toro.git',
  },
  {
    img: serena,
    tags: ['Angular', 'Laravel', 'Bootstrap'],
    name: 'Repositorio de proyectos',
    description:
      'Plataforma full-stack con panel de administración, autenticación de usuarios, despliegue en servidor real e integración base de datos.',
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
      <span class="text-project-text">Proyectos </span
      ><span class="text-home-underline"> Destacados</span>
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
