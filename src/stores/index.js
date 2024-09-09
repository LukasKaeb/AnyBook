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
            description:
              book.volumeInfo.description || "No description available",
            isFav: false,
            isDescVisible: false,
            thumbnail:
              book.volumeInfo.imageLinks?.thumbnail || "No cover available",
          }));
        }
      } catch (err) {
        this.errorMessage = err.message;
      }
    },

    toggleFav(id) {
      const book = this.books.find((b) => b.id === id);
      book.isFav = !book.isFav;

      let favBooks = JSON.parse(localStorage.getItem("favBooks")) || [];
      if (book.isFav) {
        // Add books to favorites if makred as favorite
        favBooks.push(book);
      } else {
        // Remove books from favorites if unmarked as favorite
        favBooks = favBooks.filter((b) => b.id !== id);
      }
      localStorage.setItem("favBooks", JSON.stringify(favBooks));
      console.log(localStorage.getItem("favBooks"));
    },
    setSearchTerm(term) {
      this.searchTerm = term;
    },
  },
});
