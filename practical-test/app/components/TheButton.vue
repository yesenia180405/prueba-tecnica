<script setup>
const props = defineProps({
  styles: String,
})
</script>
<template>
  <button
    :class="`bg-home-underline text-white font-bold hover:bg-button-hover hover:text-hero-bg rounded ${props.styles} `"
  >
    <slot />
  </button>
</template>
