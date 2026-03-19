a
<script setup>
import instagram from '../assets/icons/Instagram.svg'
import discord from '../assets/icons/discord.svg'
const rrss = [
  {
    icon: instagram,
    link: 'https://www.instagram.com/yes._.1804?igsh=ZjBkN240ogzOCNq1',
    label: 'Instragram',
  },
  { icon: discord, link: 'https://discord.com/', label: 'Discord' },
]
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
            <component :is="red.icon" class="h-8 w-8 [&>*]:fill-current" />
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
