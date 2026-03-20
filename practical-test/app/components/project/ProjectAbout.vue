<script setup>
import proyectos from '../../data/projects.json'
</script>
<template>
  <section
    class="bg-project-bg min-h-[40vw] md:p-20 p-8 pt-20 flex gap-8 justify-center"
  >
    <ProjectFilter></ProjectFilter>
    <AppCard
      v-for="project in proyectos"
      :key="project.name"
      :img="project.img"
      :tags="project.tags"
      :title="project.name"
      :description="project.description"
      :link="project.link"
    />
  </section>
</template>
