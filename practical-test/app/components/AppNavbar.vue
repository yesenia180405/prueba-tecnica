<script setup>
const menu = ref(false)
const links = [
  { to: '/', label: 'INICIO' },
  { to: '#', label: 'SOBRE MÍ' },
  { to: '#', label: 'PROYECTOS' },
  { to: '#', label: 'CONTACTO' },
]
</script>
<template>
  <nav
    class="text-white flex items-center justify-between bg-home-navbar w-full fixed tracking-widest px-6 md:px-20 lg:px-40 z-50"
    aria-label="Página de inicio"
  >
    <NuxtLink to="/" aria-label="Inicio">
      <img
        src="https://images.vexels.com/media/users/3/135535/isolated/preview/b79e409078ebfbc02e8615b2ed5938c6-icono-de-mariposa.png?w=360"
        alt="icon"
        height="100"
        width="100"
      />
    </NuxtLink>

    <!-- Links en desktop -->
    <ul class="hidden md:flex font-semibold gap-6 list-none">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="pr-6 hover:underline decoration-2 decoration-home-underline underline-offset-8 hover:text-home-text"
          active-class="underline text-home-text"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Links en móvil -->
    <div class="md:hidden">
      <button class="text-white text-2xl" @click="menu = !menu">
        {{ menu ? '✕' : '☰' }}
      </button>
      <ul
        v-if="menu"
        class="fixed top-[6rem] left-0 w-full bg-home-navbar flex flex-col items-center py-5 gap-6"
      >
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="hover:underline decoration-2 decoration-home-underline underline-offset-8 hover:text-home-text"
            active-class="underline text-home-text"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
