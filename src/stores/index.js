import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore", {
  state: () => ({
    books: [],
    error: null,
  }),
  getters: {},
  actions: {
    // async fetchBooks() {
    //   this.error = null;
    //   try {
    //     const apiKey = import.meta.env.VITE_API_KEY;
    //     const response = await fetch(
    //       `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`,
    //     );
    //     const data = await response.json();

    //     if (data.items) {
    //       this.books = data.items.map((item) => ({
    //         id: item.id,
    //         title: item.volumeInfo.title,
    //         authors: item.volumeInfo.authors,
    //         description: item.volumeInfo.description,
    //         thumbnail: item.volumeInfo.imageLinks.thumbnail,
    //       }));
    //     }
    //   } catch (error) {
    //     this.error = "An error occurred while fetching the books";
    //   }
    // },
    toggleFav(id) {
      const book = this.books.find((b) => b.id === id);
      book.isFav = !book.isFav;
    },
  },
});
