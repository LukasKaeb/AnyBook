import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [
      { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', isFav: false },
      { id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', isFav: true },
      { id: 3, title: 'The Silmarillion', author: 'J.R.R. Tolkien', isFav: false },
      { id: 4, title: 'The Children of Húrin', author: 'J.R.R. Tolkien', isFav: false },
      { id: 5, title: 'Unfinished Tales', author: 'J.R.R. Tolkien', isFav: false }
    ]
  }),
  getters: {},
  actions: {
    toggleFav(id) {
      const book = this.books.find((b) => b.id === id)
      book.isFav = !book.isFav
    }
  }
})
