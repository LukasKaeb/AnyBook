<template>
  <section>
    <div>
      <h2>Bookmarks</h2>
    </div>
    <div class="books-info">
      <ul>
        <li v-for="book in favoriteBooks" :key="book.id">
          <img :src="book.thumbnail" alt="book cover" />
          <base-card class="card">
            <div>
              <h2>{{ getShortTitle(book.title) }}</h2>
            </div>

            <div class="author">
              <p>by {{ book.author }}</p>
              <p>ISBN: {{ book.isbn }}</p>
            </div>
          </base-card>
          <base-card v-if="book.isDescVisible">
            <p>
              {{ getShortDesc(book.description) }}
            </p>
          </base-card>
          <div>
            <base-button
              class="description"
              @click="toggleDescVisibility(book.id)"
              >Description</base-button
            >
          </div>
          <div class="icons">
            <i
              :class="{ active: book.isFav }"
              class="material-icons"
              @click="removeFromFavs(book.id)"
              >delete</i
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useBookStore } from "../stores/index.js";
import { ref, onMounted } from "vue";
const bookStore = useBookStore();
const favoriteBooks = ref([]);

onMounted(() => {
  const favBooksFromStorage = localStorage.getItem("favBooks");

  if (favBooksFromStorage) {
    favoriteBooks.value = JSON.parse(favBooksFromStorage);
  }
});

const removeFromFavs = (bookId) => {
  let favBooks = JSON.parse(localStorage.getItem("favBooks")) || [];

  // Filter out the book which needs to be deleted
  favBooks = favBooks.filter((book) => book.id !== bookId);
  localStorage.setItem("favBooks", JSON.stringify(favBooks));

  // Update the display
  favoriteBooks.value = favBooks;
  // set the isFav to false
  const bookInStore = bookStore.books.find((book) => book.id === bookId);
  if (bookInStore) {
    bookInStore.isFav = false;
  }
};

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
  const book = favoriteBooks.value.find((book) => book.id === bookId);
  if (book) {
    book.isDescVisible = !book.isDescVisible;
  }
};
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
.login {
  margin-top: 1rem;
  padding: 1.5rem;
  width: 10rem;
}
</style>
