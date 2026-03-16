<script setup>
const proyectos = [
  {
    img: '../assets/img/serena.png',
    tags: ['JavaScript, NodeJS'],
    name: 'Serena, portal psicológico',
    description:
      'Serena es una plataforma web gratuita de apoyo psicológico para estudiantes**, que ofrece ayuda emocional accesible, confidencial y disponible en línea mediante herramientas digitales y acompañamiento profesional.',
    link: 'https://proyectoserena.vercel.app/login',
  },
]
</script>
<template>
  <section class="bg-project-bg min-h-[40vw] p-20">
    <p class="text-button-hover pb-4 font-medium tracking-widest">PORTFOLIO</p>
    <h2 aria-label="Proyectos" class="text-4xl font-bold tracking-wider">
      <span class="text-project-text">Proyectos </span
      ><span class="text-home-underline"> Destacados</span>
    </h2>
    <AppCard
      v-for="project in proyectos"
      :img="project.img"
      :title="project.name"
      :description="project.description"
      :link="project.link"
    >
    </AppCard>
  </section>
</template>
