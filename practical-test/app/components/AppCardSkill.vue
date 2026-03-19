<script setup>
const props = defineProps({
  icono: String,
  label: String,
  link: String,
})

const svgContent = ref('')
onMounted(async () => {
  const res = await fetch(props.icono)
  svgContent.value = await res.text()
})
</script>
<template>
  <section
    class="bg-card-bg rounded-2xl aspect-square gap md:w-[12vw] md:h-[19vh] flex flex-col items-center justify-center text-center group hover:bg-purple-300"
  >
    <a :href="link" target="_blank">
      <div
        v-html="svgContent"
        class="text-link-text group-hover:text-white h-[5em] w-[5em] mt-6 [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current"
      />
      <p class="py-5 font-semibold text-project-text">{{ props.label }}</p>
    </a>
  </section>
</template>
