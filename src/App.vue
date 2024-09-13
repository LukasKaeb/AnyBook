<template>
  <the-header></the-header>
  <router-view />
</template>

<script setup>
import TheHeader from "./components/ui/TheHeader.vue";


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap");

:root {
  --primary-color: #84277e;
  --secondary-color: #42b983;
  --text-color: #2c3e50;
  --background-color: #f8f8f8;
}

.dark-mode {
  --primary-color: #b44ba8;
  --secondary-color: #51e0a1;
  --text-color: #e0e0e0;
  --background-color: #1a1a1a;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-size-adjust: grayscale;
  text-align: center;
  color: var(--text-color);
}

html {
  font-family: "Roboto", sans-serif;
  background-color: var(--background-color);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--text-color);
}

nav a.router-link-exact-active {
  color: var(--secondary-color);
}
</style>
