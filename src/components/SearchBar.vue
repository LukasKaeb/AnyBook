<template>
  <form>
    <input type="text" placeholder="Search for a Book" v-model="searchTerm" @input="handleSearch"/>
    <!-- <button>Search</button> -->
    <BaseButton @click="handleSearch">Search</BaseButton>
    <h2 v-if="search">{{ search }}</h2>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from './ui/BaseButton.vue'
const searchTerm = ref('')
defineEmits(['updateSearchterm'])
const handleSearch =() => {
  emit('updateSearchterm', searchTerm.value)
}
</script>

<style scoped>
input {
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 50%;
}
</style>
