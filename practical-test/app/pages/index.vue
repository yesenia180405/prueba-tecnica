<script setup>
const AppAbout = defineAsyncComponent(() => import('~/components/AppAbout.vue'))
const AppProjects = defineAsyncComponent(
  () => import('~/components/AppProjects.vue')
)
const AppSkills = defineAsyncComponent(
  () => import('~/components/AppSkills.vue')
)
const AppContact = defineAsyncComponent(
  () => import('~/components/AppContact.vue')
)
</script>

<template>
  <AppHero id="hero" />
  <AppAbout id="about" class="scroll-mt-44" />
  <AppProjects id="projects" class="scroll-mt-24" />
  <AppSkills />
  <AppContact id="contact" class="scroll-mt-10" />
</template>
