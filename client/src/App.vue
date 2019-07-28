<template>
  <div id="app">
    <v-book-list />
  </div>
</template>

<script>
import BookList from './components/BookList.vue'

export default {
  name: 'app',
  components: {
    'v-book-list': BookList
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
