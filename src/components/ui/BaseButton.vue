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
  background-color: var(--primary-color);
  color: var(--background-color);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
