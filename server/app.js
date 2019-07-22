const chalk = require('chalk')
const express = require('express')
const schema = require('./schema/schema.js')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4000 || 4002 || 5002

mongoose.connect(
  'mongodb+srv://dbRESTUser:<password>@cluster0-rtfsn.mongodb.net/test?retryWrites=true&w=majority'
)

mongoose.connection.once('open', () => {
  console.log(chalk.red('Connected to database!'))
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () => {
  console.log(
    chalk.blue.underline(`Sever listening at: http://localhost:${PORT}`)
  )
})
