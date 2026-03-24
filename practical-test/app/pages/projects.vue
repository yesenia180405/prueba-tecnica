<script setup>
const ProjectAbout = defineAsyncComponent(
  () => import('~/components/project/ProjectAbout.vue')
)
definePageMeta({
  layout:'projects'
})
</script>

<template>
  <ProjectHero />
  <ProjectAbout /> 
</template>
