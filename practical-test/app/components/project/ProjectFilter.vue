<script setup>
const filters = useFilter()
</script>
<template>
  <section class="flex rounded-lg overflow-hidden justify-center w-full flex-wrap md:text-base text-sm">

    <!-- Filtros en mobile -->
    <div class="flex overflow-x-auto px-4 pb-2 scrollbar-hide ">
      <button v-for="tag in filters.allTags" :key="tag" @click="filters.selectedTag = tag"
        class="bg-purple-200 px-8 py-2 lg:py-3 hover:bg-purple-300 font-medium scrollbar-hide transition-all"
        :class="filters.selectedTag === tag ? 'bg-purple-300' : ''">
        {{ tag }}
      </button>
    </div>
  </section>
</template>
