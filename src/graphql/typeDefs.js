const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const typesArray = loadFilesSync(path.join(__dirname, '.'), {
  extensions: ['gql'],
})
const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs
