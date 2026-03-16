<script setup>
const props = defineProps({
  text: String,
  classT: String,
})
</script>
<template>
  <span :class="classT">
    {{ text }}
  </span>
</template>
