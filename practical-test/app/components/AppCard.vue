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
  <section>
    <img :src="props.img" :alt="props.title" />
    <AppTags />
    <h2 aria-label="Título del proyecto">{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <a :href="props.link"> Ver más → </a>
  </section>
</template>
