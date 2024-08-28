<template>
  <section>
    <nav>
      <h2 class="logo" @click="redirect('/')">AnyBook</h2>
      <div class="icons">
        <i class="material-icons" @click="redirect('/')">import_contacts</i>
      </div>
      <div class="routes">
        <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="/saved-books">Saved Books</router-link>
        <i class="material-icons" @click="redirect('/saved-books')">bookmarks</i>
      </div>
    </nav>
  </section>
</template>

<script setup>
// import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

// redirect user to home page when clicking on header
const redirect = (route) => {
  router.push(route)
}
</script>

<style scoped>
section {
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
}
nav {
  display: flex;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin-bottom: 1rem;
}
.logo {
  margin: 0;
  text-align: left;
  padding: 1rem;
  cursor: pointer;
  transform: rotate(-5deg);
}

/* align the routes to the middle  */

.routes {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  padding-right: 2rem;
  margin-left: auto;
  cursor: pointer;
}

.links {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
}

.links:hover {
  color: purple;
}

.router-link-active {
  color: purple;
  outline: 1px solid purple;
  padding: 0.5rem;
  border-radius: 5px;
}
.icons i {
  font-size: 3rem;
  margin-left: 6px;
  cursor: pointer;
  color: black;
  transform: rotate(5deg);
}
i {
  color: black;
}
</style>
