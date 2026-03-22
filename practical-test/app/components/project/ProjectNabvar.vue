<script setup>
</script>
<template>
  <nav
    class="text-white flex items-center justify-between bg-[rgb(26,11,51)] w-full fixed tracking-widest px-6 md:px-20 lg:px-40 z-50"
    aria-label="Página de inicio"
  >
    <NuxtLink to="/" aria-label="Inicio">
      <NuxtImg
        src="/img/mariposa.webp"
        alt="icon"
        height="100"
        width="100"
        loading="lazy"
      />
    </NuxtLink>
  </nav>
</template>
