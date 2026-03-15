<script setup></script>
<template>
  <footer class="bg-footer-b text-footer-text w-full py-4 tracking-wide">
    <section class="flex flex-col md:grid md:grid-cols-3 items-center md:mr-28 md:ml-28">
      <img
        src="https://images.vexels.com/media/users/3/135535/isolated/preview/b79e409078ebfbc02e8615b2ed5938c6-icono-de-mariposa.png?w=360"
        alt="icon"
        height="80"
        width="80"
        class="ml-10"
      />

      <div class="flex justify-center items-center gap-6 md:flex-row">
        <NuxtLink to="#" class="hover:text-home-text" aria-label="Instagram">Instagram</NuxtLink>
        <NuxtLink to="#" class="hover:text-home-text" aria-label="X">X</NuxtLink>
        <NuxtLink to="#" class="hover:text-home-text" aria-label="Discord">Discord</NuxtLink>
      </div>

      <p class="md:text-right md:mr-10 my-5 mx-5 " aria-label="Creative Commons">
        © 2026 Yesenia Toro. Todos los derechos reservados.
      </p>
    </section>
  </footer>
</template>
