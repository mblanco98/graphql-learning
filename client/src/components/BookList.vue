<template>
  <div class="main-wrapper">
    <h2>What's up mate?</h2>
    <br />
    <br />
    <h2>Here will go a list of books</h2>
    <ApolloQuery :query="getBooksQuery">
      <!-- The result will automatically updated -->
      <template slot-scope="{ result: { data: { books }, loading } }">
        <!-- Some content -->
        <div v-if="loading">Loading...</div>
        <ul v-else>
          <li v-for="(book, i) in books" :key="i">
            Name: {{ book.name }}
            <br />
            <br />
            Genre: {{ book.genre }}
          </li>
        </ul>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { getBooksQuery } from '../queries/index'

export default {
  name: 'BookList',
  data: () => ({
    loading: 0,
    getBooksQuery
  }),
  apollo: {
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-and-network'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/components/book-list.scss';
</style>
