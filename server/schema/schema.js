const graphql = require('graphql')
const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql

const books = [
  { name: 'Dummy 1', genre: 'whatever', id: '1', authorId: '1' },
  { name: 'Dummy 1.1', genre: 'whatever', id: '11', authorId: '1' },
  { name: 'Dummy 2', genre: 'whatever1', id: '2', authorId: '2' },
  { name: 'Dummy 2.2', genre: 'whatever1', id: '24', authorId: '2' },
  { name: 'Dummy 3', genre: 'whatever', id: '3', authorId: '3' },
  { name: 'Dummy 4', genre: 'whatever1', id: '4', authorId: '4' }
]

const authors = [
  { name: 'Tommy Doe', age: '32', id: '1' },
  { name: 'Jhon Doe', age: '42', id: '2' },
  { name: 'Ana Doe', age: '38', id: '3' },
  { name: 'Nemo Doe', age: '11', id: '4' }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent) {
        return _.find(authors, { id: parent.authorId })
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        return _.filter(books, { authorId: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        // code to get data from DB or other source
        return _.find(books, { id })
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        // code to get data from DB or other source
        return _.find(authors, { id })
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
