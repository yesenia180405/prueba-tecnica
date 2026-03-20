<script setup>
import proyectos from '../data/projects.json'
</script>
<template>
  <section
    class="bg-project-bg min-h-[40vw] md:p-20 p-8 pt-20"
    aria-label="Contenido de los proyectos"
  >
    <p class="text-purple-600 pb-4 font-medium tracking-widest md:pl-28">
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
        :key="project.name"
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
