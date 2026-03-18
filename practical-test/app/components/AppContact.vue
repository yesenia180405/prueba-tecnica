<script setup>
import mail from '../assets/img/mail.svg'
import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'

const contact = [
  {
    icon: mail,
    descripcion: 'yes.ale1804@gmail.com',
    link: 'https://mail.google.com/mail/?view=cm&to=yes.ale1804@gmail.com',
  },
  {
    icon: linkedin,
    descripcion: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yeseniatoro',
  },
  {
    icon: github,
    descripcion: 'GitHub',
    link: 'https://github.com/yesenia180405',
  },
]
</script>

<template>
  <section
    class="bg-project-bg min-h-[50vw] text-center flex flex-col items-center px-6"
  >
    <h2
      aria-label="¿Tienes un Proyecto?"
      class="pt-28 font-bold text-5xl flex md:flex-row flex-col gap-5"
    >
      <span class="text-project-text">¿Tienes un </span>
      <span class="text-hero-last"> Proyecto?</span>
    </h2>
    <p class="pt-7 text-xl pb-14 text-about-text">
      Estoy interesada en colaborar o formar parte de tu equipo.
    </p>

    <section class="md:flex md:justify-around text-center md:w-[50vw] mx-auto">
      <div
        v-for="info in contact"
        :key="info"
        class="flex flex-col items-center mb-7"
      >
        <a :href="info.link" target="_blank" class="flex flex-col items-center">
          <div
            class="h-14 w-14 flex items-center justify-center border bg-purple-100 rounded-full"
          >
            <component :is="info.icon" class="h-8 w-8 text-link-text" />
          </div>
          <h3 class="pt-5 text-project-text">{{ info.descripcion }}</h3>
        </a>
      </div>
    </section>
    <div class="flex justify-center mx-auto mt-10 md:w-[47vw] mb-16 w-full">
      <AppForm />
    </div>
  </section>
</template>
