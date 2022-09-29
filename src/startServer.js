import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

async function startServer({ typeDefs, resolvers }) {
  console.log('Connecting to the database')
  await mongoose.connect('mongodb://admin:admin@localhost:27017', {
    user: 'admin',
    pass: 'admin',
  })
  console.log('Database connection successfully established')

  console.log('Opening connection to the server')
  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen().then(({ url }) => console.log(`Server started at ${url}`))
}

export default startServer
