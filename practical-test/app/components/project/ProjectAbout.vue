<script setup>
const proyectos = useFilter()
</script>
<template>
  <section
    class="bg-project-bg min-h-[40vw] md:p-20 p-8 pt-20 flex flex-col gap-8 items-center w-full overflow-hidden"
  >
    <ProjectFilter></ProjectFilter>

    <div class="flex md:flex-row flex-col gap-8 flex-wrap justify-center">
      <AppCard
        v-for="project in proyectos.filtered"
        :key="project.name"
        :img="project.img"
        :tags="project.tags"
        :title="project.name"
        :description="project.description"
        :link="project.link"
      />
    </div>
    <NuxtLink to="/" class="  font-bold bg-button-hover p-2 hover:bg-purple-400 rounded-lg text-project-text ">
       Go to home →
     </NuxtLink>
  </section>
</template>
