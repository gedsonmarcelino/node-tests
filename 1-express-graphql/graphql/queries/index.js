const UserQuery = require('./user')
const PostQuery = require('./post')

module.exports = {
  ...UserQuery,
  ...PostQuery
}
