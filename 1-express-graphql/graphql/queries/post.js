const graphql = require('graphql')

const PostType = require('../types/post')

const posts = require('../../db/posts.json')

module.exports =  {
  post: {
    type: PostType,
    args:{
      id: { type: graphql.GraphQLInt }
    },
    resolve: (_, args) => {
      return posts.find(post => post.id === args.id ) 
    }
  },
  posts: {
    type: graphql.GraphQLList(PostType),
    resolve: (_, args) => posts
  }
}