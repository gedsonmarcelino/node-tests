const graphql = require('graphql')

module.exports = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString }
  }
})
