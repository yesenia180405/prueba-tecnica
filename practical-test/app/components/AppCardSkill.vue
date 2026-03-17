<script setup>
const props = defineProps({
  icono: [Object, Function],
  label: String,
})
</script>
<template>
  <section
    class="bg-card-bg rounded-2xl w-[12vw] h-[19vh] mt-10 flex flex-col items-center justify-center text-center group hover:bg-purple-300"
  >
    <component
      :is="props.icono"
      class="text-link-text group-hover:text-white h-[5em] w-[5em] mt-6"
    />
    <p class="py-5 font-semibold text-project-text">{{ props.label }}</p>
  </section>
</template>
