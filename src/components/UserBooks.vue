<template>
  <section>
    <SearchBar />
    <div class="books-info">
      <ul>
        <li v-for="book in favBooks" :key="book.id">
          <base-card class="card">
            <div>
              <h3>{{ book.title }}</h3>
            </div>

            <div class="author">
              <p>by {{ book.author }}</p>
            </div>
          </base-card>
          <div>
            <base-button class="description">Description</base-button>
          </div>
          <div class="icons">
            <i
              :class="{ active: book.isFav }"
              class="material-icons"
              @click="bookStore.toggleFav(book.id)"
              >bookmark</i
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import SearchBar from "./SearchBar.vue";
import { computed } from "vue";
import { useBookStore } from "../stores/index.js";

// only display the books where isFav is true
const favBooks = computed(() => bookStore.books.filter((book) => book.isFav));

const bookStore = useBookStore();
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
/* style the the cover to be on the left of the book title */
img {
  width: 100px;
  float: left;
  margin-right: 10px;
  /* scale the image to fit the basecard */
  object-fit: cover;
  height: 100%;
  width: 100px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
/* the buy button needs to be under the book.name */
.description {
  display: block;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
}
li {
  /* align to center */
  justify-content: center;
  align-items: center;
  display: flex;
}
.card {
  width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* align the author class to be under the h3 */
.author {
  display: block;
  justify-content: center;
  align-items: center;
}
/* style the author name */
.author p {
  font-size: 0.8rem;
  color: #666;
}
/* style the book title */
h3 {
  font-size: 1.2rem;
  color: #333;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* move the icon under the button */
.icons {
  /* icon should be under the basebutton */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.icons i {
  cursor: pointer;
}
.active {
  color: #f00;
}
</style>
