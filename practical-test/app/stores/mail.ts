import { defineStore } from 'pinia'

export const useForm = defineStore('form', () => {
  const form = ref({ name: '', email: '', message: '' })
  const loading = ref(false)
  const success = ref(false)
  const error = ref(false)
  const submit = async () => {
    loading.value = true
    try {
      const res = await fetch('https://formspree.io/f/xnjglnvv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value),
      })
      success.value = res.ok

      if (res.ok) {
        form.value = { name: '', email: '', message: '' }
        success.value = true
        setTimeout(() => {
          success.value = false
        }, 3000)
      }
    } catch {
      error.value = true
      setTimeout(() => {
        error.value = false
      }, 3000)
    } finally {
      loading.value = false
    }
  }
  return { form, loading, success, error, submit }
})
