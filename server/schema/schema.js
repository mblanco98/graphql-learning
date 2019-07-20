const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql

const books = [
  { name: 'Dummy 1', genre: 'whatever', id: '1' },
  { name: 'Dummy 2', genre: 'whatever1', id: '2' },
  { name: 'Dummy 3', genre: 'whatever', id: '3' },
  { name: 'Dummy 4', genre: 'whatever1', id: '4' }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from DB or other source
        return _.find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
