const graphql = require('graphql')

const UserType = require('../types/user')

const users = require('../../db/users.json')

module.exports = {
  user: {
    type: UserType,
    args: {
      id: { type: graphql.GraphQLInt }
    },
    resolve: (_, args) => {
      return users.find(user => user.id === args.id)
    }
  },
  users: {
    type: graphql.GraphQLList(UserType),
    resolve: (_, args) => users
  }
}
