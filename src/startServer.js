import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let server

async function startServer({ typeDefs, resolvers }) {
  console.log('Connecting to the database')
  let conn

  if (process.env.NODE_ENV === 'test') {
    let mongod = await MongoMemoryServer.create()
    conn = await mongoose.connect(mongod.getUri())
  } else {
    conn = await mongoose.connect('mongodb://admin:admin@localhost:27017', {
      user: 'admin',
      pass: 'admin',
    })
  }

  console.log('Database connection successfully established')

  console.log('Opening connection to the server')
  server = new ApolloServer({ typeDefs, resolvers })
  server.listen().then(({ url }) => console.log(`Server started at ${url}`))
}

export { startServer, server }
