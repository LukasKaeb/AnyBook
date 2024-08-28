import { createRouter, createWebHistory } from 'vue-router'
import BooksList from '../components/BooksList.vue'
import UserBooks from '../components/UserBooks.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: BooksList
  },
  { path: '/saved-books', name: 'saved-books', component: UserBooks }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
