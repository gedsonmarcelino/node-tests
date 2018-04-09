var express = require('express')
var app = express()

const {User, Post} = require('./db/models')

app.get('/', function (req, res) {
  // let users = User.findAll().then( items => {
  //   items.forEach(item => {
  //     console.log( item.id, item.name, item.email )
  //   });
  // })

  Post.findAll({
    include: [{
      model: User,
      as: 'user'
    }]
  }).then(items => {
    items.forEach(item => {
      console.log(item.id, item.title, item.userId, item.user)
    })
  })

  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
