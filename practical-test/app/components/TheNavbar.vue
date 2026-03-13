<script setup></script>
<template>
  <nav
    class="flex items-center justify-between bg-home-navbar w-full fixed tracking-widest"
  >
    <img
      src="https://images.vexels.com/media/users/3/135535/isolated/preview/b79e409078ebfbc02e8615b2ed5938c6-icono-de-mariposa.png?w=360"
      alt="icon"
      height="100"
      width="100"
      class="ml-80"
    />

    <div class="mr-80 text-white font-semibold">
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
  </nav>
</template>
