<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  height: 100px;
}
</style>
