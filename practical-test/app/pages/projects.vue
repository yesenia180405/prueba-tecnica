<script setup>
const ProjectAbout = defineAsyncComponent(
  () => import('~/components/project/ProjectAbout.vue')
)
</script>

<template>
  <ProjectHero />
  <ProjectAbout />
</template>
