<script setup>
const filters = useFilter()
</script>
<template>
  <section class="flex rounded-lg overflow-hidden">
    <button
      v-for="tag in filters.allTags"
      :key="tag"
      @click="filters.selectedTag = tag"
      class="bg-purple-200 px-8 py-3 hover:bg-purple-300 font-medium mb-8"
    >
      {{ tag }}
    </button>
  </section>
</template>
