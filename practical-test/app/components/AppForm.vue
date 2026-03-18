<script setup>
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
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <section
    class="w-full border border-pink-100 rounded-3xl p-10 bg-card-bg shadow"
  >
    <form @submit.prevent="submit" class="grid grid-cols-2 gap-7 text-left">
      <div class="flex flex-col">
        <h3 class="font-semibold pb-3 text-sm text-project-text">NOMBRE</h3>
        <input
          v-model="form.name"
          placeholder="John Doe"
          required
          class="p-3 rounded-lg placeholder:text-form-text border focus:border-hero-last focus:outline-none focus:border-2"
        />
      </div>

      <div>
        <h3 class="font-semibold pb-3 text-sm text-project-text">EMAIL</h3>
        <input
          v-model="form.email"
          type="email"
          placeholder="john@example.com"
          required
          class="p-3 rounded-lg w-full placeholder:text-form-text border focus:border-hero-last focus:outline-none focus:border-2"
        />
      </div>

      <div class="col-span-2 flex flex-col">
        <h3 class="font-semibold pb-3 text-sm text-project-text">MENSAJE</h3>
        <textarea
          v-model="form.message"
          id="message"
          placeholder="Tu idea..."
          required
          class="p-3 pb-16 rounded-lg placeholder:text-form-text border focus:border-hero-last focus:outline-none focus:border-2"
        ></textarea>
      </div>

      <AppButton
        type="submit"
        :disabled="loading"
        styles="w-full rounded-lg bg-purple-500 col-span-2 p-4"
      >
        {{ loading ? 'Enviando...' : 'Enviar' }}
      </AppButton>

      <p v-if="success" class="text-purple-900">¡Mensaje enviado!</p>
      <p v-if="error" class="text-red-800">Error al enviar</p>
    </form>
  </section>
</template>
