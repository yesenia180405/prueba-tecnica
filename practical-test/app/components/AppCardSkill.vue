<script setup>
const props = defineProps({
  icono: String,
  label: String,
})
</script>
<template>
  <section class="bg-card-bg">
    <img :src="props.icono" :alt="props.label" />
    <p>{{ props.label }}</p>
  </section>
</template>
