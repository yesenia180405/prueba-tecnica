<script setup>
const form = useForm()
</script>
<template>
  <section
    class="w-full border border-pink-100 rounded-3xl p-10 bg-card-bg shadow"
  >
    <form
      @submit.prevent="form.submit"
      class="flex flex-col md:grid md:grid-cols-2 gap-7 text-left"
    >
      <div class="flex flex-col">
        <h3 class="font-semibold pb-3 text-sm text-project-text">NAME</h3>
        <input
          v-model="form.form.name"
          placeholder="John Doe"
          required
          class="p-3 rounded-lg w-full placeholder:text-form-text border focus:border-hero-last focus:outline-none focus:border-2"
        />
      </div>

      <div class="flex flex-col">
        <h3 class="font-semibold pb-3 text-sm text-project-text">EMAIL</h3>
        <input
          v-model="form.form.email"
          type="email"
          placeholder="john@example.com"
          required
          class="p-3 rounded-lg w-full placeholder:text-form-text border focus:border-hero-last focus:outline-none focus:border-2"
        />
      </div>

      <div class="md:col-span-2 flex flex-col">
        <h3 class="font-semibold pb-3 text-sm text-project-text">MESSAGE</h3>
        <textarea
          v-model="form.form.message"
          id="message"
          placeholder="Your idea..."
          required
          class="p-3 pb-16 rounded-lg placeholder:text-form-text border focus:border-hero-last focus:outline-none focus:border-2"
        ></textarea>
      </div>

      <AppButton
        type="submit"
        :disabled="form.loading"
        styles="w-full rounded-lg bg-purple-500 md:col-span-2 p-4"
      >
        {{ form.loading ? 'Sending...' : 'Send' }}
      </AppButton>

      <p v-if="form.success" class="text-purple-900">¡Message sent!</p>
      <p v-if="form.error" class="text-red-800">Error sending</p>
    </form>
  </section>
</template>
