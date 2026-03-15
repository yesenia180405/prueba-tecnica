<script setup>
const skills = [
    // Hacer componente etiquetas
    { id: 1, text: "Frontend" },
    { id: 2, text: "Backend" },
    { id: 3, text: "UI/UX Design" }
];
</script>
<template>
    <section class="bg-about-bg h-[36vw] flex gap-10 items-center px-96">
        <img src="../assets/img/foto.jpeg" alt="Imagen de perfil"
            class="m-5 w-[19rem] h-[26rem] rounded rounded-2xl shadow-2xl shadow-[0_0_54px_rgb(147,51,234)]" />
        <section class="py-40">
            <h2 class="text-3xl font-semibold pb-7"><span class="text-hero-bg">Uniendo </span>
                <span class="text-button-hover"> Diseño </span>
                <span class="text-hero-bg"> y</span>
                <span class="text-hero-last"> Código </span>
            </h2>

            <p class="text-lg text-about-text">
                Con más de 5 años de experiencia, transformo ideas complejas en interfaces intuitivas y arquitecturas
                robustas. Me apasiona el minimalismo, el rendimiento y la atención obsesiva al detalle.
            </p>

            <div class="flex gap-3 mt-4">
                <span v-for="skill in skills" :key="skill.id"
                    class="border border-gray-400 rounded-lg px-4 py-1 text-sm text-about-text bg-white">
                    {{ skill.text }}
                </span>
            </div>
        </section>
    </section>
</template>