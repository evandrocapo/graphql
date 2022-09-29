import startServer from './startServer'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

console.log('Starting the server')
startServer({ typeDefs, resolvers })
