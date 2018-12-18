const graphql = require('graphql')
const UserType = require('./user')

const users = require('../../db/users.json')

module.exports = new graphql.GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    content: { type: graphql.GraphQLString },
    user_id: { type: graphql.GraphQLInt },
    user: {
      type: UserType,
      resolve: (post, args, info) => users.find(user => user.id === post.id_user)
    }
  }
})
