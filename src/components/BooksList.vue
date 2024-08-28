<template>
  <section>
    <SearchBar @updateSearchTerm="searchBooks" />
    <div class="books-info">
      <ul>
        <li v-for="book in filteredBooks" :key="book.id">
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
            <!-- bookmark a book -->
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
import { ref, computed } from "vue";
import { useBookStore } from "../stores/index.js";

const books = ref([]);
const error = ref(null);

const fetchBooks = async () => {
  error.value = null;
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`,
    );
    const data = await response.json();

    if (data.items) {
      books.value = data.items.map((book) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors[0],
        };
      });
      console.log(books.value);
    }
  } catch (error) {
    console.log(error);
    error.value = error.message;
  }
};
const filteredBooks = computed(() => {
  return books.value.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.value.toLowerCase());
  });
});

// set search term
//
const searchTerm = ref("");

const searchBooks = (term) => {
  searchTerm.value = term;
  fetchBooks();
};

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
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
.active {
  color: #f00;
}
i {
  color: black;
}
</style>
