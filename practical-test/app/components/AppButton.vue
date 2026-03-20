<script setup>
const props = defineProps({
  styles: String,
  type: String,
  default: 'button',
  disabled: Boolean,
})
</script>
<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :class="` text-white font-bold hover:bg-button-hover hover:text-hero-bg rounded ${props.styles} `"
    aria-label="Botón"
  >
    <slot />
  </button>
</template>
