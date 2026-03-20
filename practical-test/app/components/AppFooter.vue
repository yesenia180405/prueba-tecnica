<script setup>
import data from '../data/socialMedia.json'
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
  <footer class="bg-footer-b text-gray-400 w-full py-4 tracking-wide">
    <section
      class="flex flex-col md:grid md:grid-cols-3 items-center md:mr-28 md:ml-28"
    >
      <NuxtImg
        src="/img/mariposa.webp"
        alt="icon"
        height="80"
        width="80"
        class="md:ml-10"
        format="webp"
        loading="lazy"
      />

      <section class="flex gap-8 items-center justify-center">
        <div v-for="red in rrss" :key="red.label">
          <a :href="red.link" target="_blank" :aria-label="red.label">
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
