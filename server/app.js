const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const chalk = require('chalk')
const schema = require('./schema/schema.js')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000 || 4002 || 5002

mongoose
  .connect(process.env.DB_USER, { useNewUrlParser: true })
  // eslint-disable-next-line
  .catch(err => console.error(err))

mongoose.connection.once('open', () =>
  // eslint-disable-next-line
  console.info(chalk.green('Connected to database!'))
)

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () =>
  // eslint-disable-next-line
  console.info(
    chalk.blue.underline(`Sever listening at: http://localhost:${PORT}/graphql`)
  )
)
