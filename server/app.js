const chalk = require('chalk')
const express = require('express')
const schema = require('./schema/schema.js')
const graphqlHTTP = require('express-graphql')

const app = express()
const PORT = process.env.PORT || 4000 || 4002 || 5002
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () => {
  console.log(chalk.blue.underline(`Sever listening at: http://localhost:${PORT}`))
})
