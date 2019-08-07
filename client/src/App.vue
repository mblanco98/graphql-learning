<template>
  <div id="app">
    <v-book-list />
    <v-add-book />
  </div>
</template>

<script>
import BookList from './components/BookList.vue'
import AddBook from './components/AddBook.vue'

export default {
  components: {
    'v-book-list': BookList,
    'v-add-book': AddBook
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
