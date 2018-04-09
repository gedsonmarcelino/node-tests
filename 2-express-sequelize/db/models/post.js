'use strict'
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {})
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {as: 'user', constraints: true})
  }
  return Post
}
