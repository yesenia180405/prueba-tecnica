<script setup>
const props = defineProps({
  icono: [Object, Function],
  label: String,
  link: String,
})
</script>
<template>
  <section
    class="bg-card-bg rounded-2xl w-[40vw] gap md:w-[12vw] md:h-[19vh] flex flex-col items-center justify-center text-center group hover:bg-purple-300"
  >
    <a :href="link" target="_blank">
      <component
        :is="props.icono"
        class="text-link-text group-hover:text-white h-[5em] w-[5em] mt-6"
      />
      <p class="py-5 font-semibold text-project-text">{{ props.label }}</p>
    </a>
  </section>
</template>
