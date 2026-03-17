<script setup>
const props = defineProps({
  icono: [Object, Function],
  label: String,
})
</script>
<template>
  <section class="bg-card-bg">
    <component :is="props.icono" class="text-link-text" />
    <p>{{ props.label }}</p>
  </section>
</template>
