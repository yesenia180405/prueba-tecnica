<script setup>
const media = ref(false)
</script>
<template>
  <nav
    class="flex items-center justify-between bg-home-navbar w-full fixed tracking-widest px-6 md:px-20 lg:px-40"
  >
    <img
      src="https://images.vexels.com/media/users/3/135535/isolated/preview/b79e409078ebfbc02e8615b2ed5938c6-icono-de-mariposa.png?w=360"
      alt="icon"
      height="100"
      width="100"
    />
    <!-- Links en desktop -->
    <div class="hidden md:flex text-white font-semibold gap-6">
      <NuxtLink
        to="#"
        class="pr-6 hover:underline decoration-2 decoration-home-underline underline-offset-8 hover:text-home-text"
      >
        INICIO
      </NuxtLink>
      <NuxtLink
        to="#"
        class="pr-6 hover:underline decoration-2 decoration-home-underline underline-offset-8 hover:text-home-text"
      >
        SOBRE MÍ
      </NuxtLink>
      <NuxtLink
        to="#"
        class="pr-6 hover:underline decoration-2 decoration-home-underline underline-offset-8 hover:text-home-text"
      >
        PROYECTOS
      </NuxtLink>
      <NuxtLink
        to="#"
        class="pr-6 hover:underline decoration-2 decoration-home-underline underline-offset-8 hover:text-home-text"
      >
        CONTACTO
      </NuxtLink>
    </div>

    <!-- Links en movil -->
    <div class="md:hidden text-white font-semibold gap-6">
      <select @change="navigate" class="bg-home-navbar text-white p-2">
        <option value="" disabled selected></option>
        <option value="/">INICIO</option>
        <option value="/sobre-mi">SOBRE MÍ</option>
        <option value="/proyectos">PROYECTOS</option>
        <option value="/contacto">CONTACTO</option>
      </select>
    </div>
  </nav>
</template>
