<script setup>
import data from '../assets/data/socialMedia.json'
const rrss = data.footer
const svgContents = ref([])
onMounted(async () => {
  for (const redes of rrss) {
    const res = await fetch(redes.icon)
    svgContents.value[redes.icon] = await res.text()
  }
})
</script>
<template>
  <footer class="bg-footer-b text-footer-text w-full py-4 tracking-wide">
    <section
      class="flex flex-col md:grid md:grid-cols-3 items-center md:mr-28 md:ml-28"
    >
      <img
        src="https://images.vexels.com/media/users/3/135535/isolated/preview/b79e409078ebfbc02e8615b2ed5938c6-icono-de-mariposa.png?w=360"
        alt="icon"
        height="80"
        width="80"
        class="md:ml-10"
      />

      <section class="flex gap-8 items-center justify-center">
        <div v-for="red in rrss" :key="red.label">
          <a :href="red.link" target="_blank">
            <div
              v-html="svgContents[red.icon]"
              class="h-8 w-8 [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current"
            />
          </a>
        </div>
      </section>

      <p
        class="md:text-right md:mr-10 my-5 mx-5 md:text-base"
        aria-label="Creative Commons"
      >
        © <span class="md:hidden lg:inline">2026 Yesenia Toro. </span> All
        rights reserved
      </p>
    </section>
  </footer>
</template>
