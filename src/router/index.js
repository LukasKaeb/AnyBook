import { createRouter, createWebHistory } from "vue-router";
import BooksList from "../components/BooksList.vue";
import UserBooks from "../components/UserBooks.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: BooksList,
  },
  { path: "/saved-books", name: "saved-books", component: UserBooks },
  // user login route
  {
    path: "/register",
    name: "register",
    component: UserRegister,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
