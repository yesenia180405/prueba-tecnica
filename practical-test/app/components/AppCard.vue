<script setup>
const props = defineProps({
  img: String,
  tags: Array,
  title: String,
  description: String,
  link: String,
})
</script>
<template>
  <section
    class="group flex flex-col border border-gray-200 mb-5 rounded-3xl bg-card-bg md:w-[30em] hover:border-card-underline hover:shadow-[0_0_14px_rgb(215,201,218)] overflow-hidden h-full"
  >
    <div class="overflow-hidden">
      <img
        :src="props.img"
        :alt="props.title"
        class="h-[17em] w-full rounded-t-3xl object-cover transition-all duration-300 group-hover:scale-110 z-50"
      />
    </div>
    <div class="flex flex-wrap gap-2 px-7 pt-5">
      <AppTags
        v-for="tag in props.tags"
        :key="tag"
        :text="tag"
        classT="bg-card-tags p-1 rounded mb-5 text-xs text-purple-400"
      />
    </div>
    <div class="md:px-7 md:pb-7 p-6 pb-7 just">
      <h2
        aria-label="Título del proyecto"
        class="text-2xl font-bold text-project-text pb-4"
      >
        {{ props.title }}
      </h2>
      <p class="text-card-text text-lg pb-5">{{ props.description }}</p>
      <a
        :href="props.link"
        class="text-link-text font-bold hover:text-project-text"
        target="_blank"
      >
        Ver más →
      </a>
    </div>
  </section>
</template>
