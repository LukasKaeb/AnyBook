<template>
  <!-- Create a Base button -->
  <button>
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
/* style the button */
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #84277e;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
