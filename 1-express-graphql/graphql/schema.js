const graphql = require('graphql')
const queries = require('./queries/index')

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: queries
  })
})

module.exports = schema
