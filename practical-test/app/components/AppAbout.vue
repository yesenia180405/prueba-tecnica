<script setup>
import data from '../data/skills.json'
const skills = data.about
</script>
<template>
  <section
    class="bg-about-bg min-h-[72vh] flex flex-col md:flex-row gap-10 justify-center items-center w-full pb-9"
  >
    <div class="flex flex-col items-center md:flex-row gap-10 mx-10">
      <NuxtImg
        src="/img/foto.webp"
        alt="Imagen de perfil"
        width="304"
        height="416"
        sizes="sm:208px md:304px"
        class="w-52 h-68 md:w-[19rem] md:h-[26rem] rounded-2xl shadow-[0_0_58px_rgb(168,85,247)] hover:shadow-[0_0_59px_rgb(147,51,234)] mt-10"
        format="webp"
        loading="lazy"
      />
      <section class="mt-5 md:px-8 md:w-[56vw] flex flex-col">
        <h2
          class="text-3xl font-semibold pb-7 text-center md:text-left"
          aria-label="Uniendo Diseño y Código"
        >
          <span class="text-project-text">Integrating </span>
          <span class="text-purple-500"> Code </span>
          <span class="text-hero-bg"> and </span>
          <span class="text-hero-last"> Design </span>
        </h2>

        <p class="text-lg text-about-text" aria-label="Sobre mí">
          With 3 years of experience developing academic and personal projects,
          I have built a solid foundation in both frontend and backend. I’m
          passionate about designing interfaces that captivate at first glance
          and exploring the logic behind every application. I approach each
          project, regardless of its scale, with curiosity, precision, and a
          strong desire to keep growing.
        </p>

        <div class="flex md:flex-row flex-wrap gap-3 mt-4 w-full">
          <AppTags
            v-for="skill in skills"
            :key="skill.id"
            classT="border border-gray-400 rounded-lg px-3 py-1 text-sm text-about-text bg-white"
            :text="skill.text"
          >
          </AppTags>
        </div>
      </section>
    </div>
  </section>
</template>
