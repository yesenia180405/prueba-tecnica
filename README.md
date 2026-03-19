# 🟣 Portfolio Personal

Portfolio personal desarrollado como prueba técnica frontend, construido con **Nuxt.js**, **Vue.js** y **TypeScript**.

## 🚀 Tech Stack

- [Nuxt.js](https://nuxt.com/) — Framework SSR/SPA
- [Vue.js 3](https://vuejs.org/) — Framework UI con Composition API
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- CSS3 — Estilos personalizados con variables y animaciones

## 📋 Descripción

Aplicación web de una sola página (SPA) que muestra mi perfil profesional como desarrollador frontend. El proyecto incluye secciones de presentación, habilidades técnicas, proyectos y contacto.

Desarrollado con especial atención a la **organización de componentes**, **buenas prácticas de Vue** y una interfaz visual atractiva en tonos morados.

## 🛠️ Instalación y uso

```bash
# Clonar el repositorio
git clone git@github.com:yesenia180405/prueba-tecnica.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Creación de la estructura del proyecto
cd app
mkdir -p assets components composables layouts middleware pages plugins public server/api stores
```

## 📁 Estructura del proyecto

```
├── components/       # Componentes reutilizables de Vue
├── pages/            # Páginas de la aplicación
├── assets/           # Estilos globales e imágenes
├── public/           # Archivos estáticos
└── app.vue           # Componente raíz
```

## ✨ Características

- Diseño responsive adaptado a móvil, tablet y escritorio
- Navegación suave entre secciones
- Componentes reutilizables y bien estructurados
- Tipado con TypeScript para mayor robustez del código

## 📬 Contacto

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Nombre](https://linkedin.com/in/tu-perfil)

## Medidas de interes en Tailwind

- sm: — 640px en adelante (móvil grande)
- md: — 768px en adelante (tablet)
- lg: — 1024px en adelante (escritorio pequeño)
- xl: — 1280px en adelante (escritorio)
- 2xl: — 1536px en adelante (pantalla grande)

## Instalación para los íconos

```bash
npm install -D vite-svg-loader
```

## Para el envio del formulario
- El proyecto utiliza Formspree para gestionar el envío de emails del formulario de contacto sin necesidad de backend.

### Setup
- Crear cuenta en formspree.io y obtener el endpoint del formulario.
- Añadir la variable de entorno:
- Y finalmente implementar.

## Uso de v-htmml
- En lugar de importar los SVGs como componentes, he hecho un fetch del archivo SVG inyectando su contenido directamente en el HTML con v-html. Esto se llama renderizado inline.
JSON tiene la ruta → fetch la descarga → v-html la inyecta en el DOM

## Para usar NuxtImg se debe instalar la siguiente dependencia
```bash
npm install @nuxt/image
```
