import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore", {
  state: () => ({
    books: [],
    errorMessage: null,
    searchTerm: "",
  }),
  getters: {
    getFavBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
  actions: {
    async fetchBooks() {
      this.errorMessage = null;
      if (!this.searchTerm) return;

      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            this.searchTerm,
          )}&key=${apiKey}`,
        );
        const data = await res.json();

        if (data.items) {
          this.books = data.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors?.[0] || "Unknown Author",
            isFav: false,
          }));
        }
      } catch (err) {
        this.errorMessage = err.message;
      }
    },

    toggleFav(id) {
      const book = this.books.find((b) => b.id === id);
      book.isFav = !book.isFav;
    },
    setSearchTerm(term) {
      this.searchTerm = term;
    },
  },
});
