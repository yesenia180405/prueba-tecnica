<script setup>
const skills = [
  // Hacer componente etiquetas
  { id: 1, text: 'Frontend' },
  { id: 2, text: 'Backend' },
  { id: 3, text: 'UI/UX Design' },
]
</script>
<template>
  <section
    class="bg-about-bg min-h-[72vh] flex flex-col md:flex-row gap-10 justify-center items-center w-full pb-9"
  >
    <div class="flex flex-col items-center md:flex-row gap-10 mx-10">
      <img
        src="../assets/img/foto.jpeg"
        alt="Imagen de perfil"
        class="w-52 h-68 md:w-[19rem] md:h-[26rem] rounded-2xl shadow-[0_0_54px_rgb(147,51,234)] mt-10"
      />
      <section class="mt-5 md:px-8 px-16 md:w-[56vw] flex flex-col">
        <h2
          class="text-3xl font-semibold pb-7 text-center md:text-left"
          aria-label="Uniendo Diseño y Código"
        >
          <span class="text-project-text">Uniendo </span>
          <span class="text-button-hover"> Diseño </span>
          <span class="text-hero-bg"> y</span>
          <span class="text-hero-last"> Código </span>
        </h2>

        <p class="text-lg text-about-text" aria-label="Sobre mí">
          Con 3 años desarrollando proyectos académicos y personales, he
          construido una base sólida tanto en frontend como en backend. Me
          apasiona diseñar interfaces que enamoran a primera vista y explorar la
          lógica que hay detrás de cada aplicación. Cada proyecto, sin importar
          su escala, lo afronto con curiosidad, precisión y ganas de seguir
          creciendo.
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
