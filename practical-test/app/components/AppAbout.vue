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
    class="bg-about-bg min-h-[72vh] flex flex-col md:flex-row gap-10 items-center md:px-96 w-full"
  >
    <img
      src="../assets/img/foto.jpeg"
      alt="Imagen de perfil"
      class="w-[19rem] h-[26rem] rounded-2xl object-cover shadow-[0_0_54px_rgb(147,51,234)] mt-10"
    />
    <section class="md:py-40 mt-5 px-8">
      <h2 class="text-3xl font-semibold pb-7">
        <span class="text-project-text">Uniendo </span>
        <span class="text-button-hover"> Diseño </span>
        <span class="text-hero-bg"> y</span>
        <span class="text-hero-last"> Código </span>
      </h2>

      <p class="text-lg text-about-text">
        Con más de 5 años de experiencia, transformo ideas complejas en
        interfaces intuitivas y arquitecturas robustas. Me apasiona el
        minimalismo, el rendimiento y la atención obsesiva al detalle.
      </p>

      <div class="flex gap-3 mt-4">
        <AppTags
          v-for="skill in skills"
          :key="skill.id"
          classT="border border-gray-400 rounded-lg px-4 py-1 text-sm text-about-text bg-white my-6"
          :text="skill.text"
        >
        </AppTags>
      </div>
    </section>
  </section>
</template>
