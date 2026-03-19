<script setup>
import data from '../data/skills.json'
const skills = data.stack
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
      TECHNOLOGY STACK
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
