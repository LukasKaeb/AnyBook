<template>
  <section>
    <!-- <SearchBar @updateSearchTerm="searchBooks" /> -->
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search for a book..."
      @input="updateSearchTerm"
    />
    <div class="books-info">
      <ul>
        <li v-for="book in bookStore.books" :key="book.id">
          <img :src="book.thumbnail" alt="book cover" />
          <base-card class="card">
            <div>
              <h2>{{ getShortTitle(book.title) }}</h2>
            </div>

            <div class="author">
              <p>by {{ book.author }}</p>
            </div>
          </base-card>
          <base-card v-if="book.isDescVisible">
            <p>
              {{ getShortDesc(book.description) }}
            </p>
          </base-card>
          <div>
            <base-button
              class="description-button"
              @click="toggleDescVisibility(book.id)"
              >Description</base-button
            >
          </div>
          <div class="icons">
            <!-- bookmark a book -->
            <i
              :class="{ active: book.isFav }"
              class="material-icons"
              @click="toggleFav(book.id)"
              >bookmark</i
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
// import SearchBar from "./SearchBar.vue";
import { ref } from "vue";
import { useBookStore } from "../stores/index.js";

const books = ref(JSON.parse(localStorage.getItem("favBooks")) || []);
const searchTerm = ref("");

const getShortTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  } else {
    return title;
  }
};

const getShortDesc = (description) => {
  const words = description.split(" ");
  if (words.length > 30) {
    return words.slice(0, 30).join(" ") + "...";
  } else {
    return description;
  }
};

const toggleDescVisibility = (bookId) => {
  // toggle desc visibility
  const book = bookStore.books.find((book) => book.id === bookId);
  if (book) {
    book.isDescVisible = !book.isDescVisible;
  }
};

const updateSearchTerm = (term) => {
  bookStore.setSearchTerm(searchTerm.value);
  bookStore.fetchBooks();
};

const toggleFav = (id) => {
  bookStore.toggleFav(id);
};

const bookStore = useBookStore();
</script>

<style scoped>
.books-info {
  margin-top: 2rem;
  display: flex;
}

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
.description-button {
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
  display: block;
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
input {
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 50%;
}
</style>
