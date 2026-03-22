import { defineStore } from 'pinia'
import data from '../data/projects.json'
const projects=data.featured;
export const useFilter = defineStore('filter', () => {
  const selectedTag = ref('All')

  const allTags = computed(() => [
    'All',
    ...new Set(projects.flatMap((p) => p.tags)),
  ]) //flatMap, unifica los arrays

  const filtered = computed(() => {
    return selectedTag.value === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag.value))
  })
  return { selectedTag, allTags, filtered }
})
