<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <input
          type="email"
          id="email"
          v-model.trim="email"
          placeholder="Email"
        />
      </div>
      <div class="form-control">
        <input
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="Password"
        />
      </div>
      <base-button class="button" @click="register">Register</base-button>
      <p>
        Already have an Account? Login
        <router-link class="redirect" to="/login">here.</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { useBookStore } from "../stores/index.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
// const bookStore = useBookStore();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered", data);
      router.push("/saved-books");
    })
    .catch((error) => {
      console.log("Error logging in", error);
      alert(error.message);
    });
};
</script>

<style scoped>
form {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  height: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

input {
  width: 640px;
  padding: 0.5rem;
  font: inherit;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.button {
  margin-top: 4rem;
  cursor: pointer;
  padding: 1rem 4rem;
}
.redirect {
  color: blue;
  cursor: pointer;
  text-decoration: none;
}
</style>
