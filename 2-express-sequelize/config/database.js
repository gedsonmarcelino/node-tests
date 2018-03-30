const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: '/home/gedson/Development/node/node-tests/2-express-sequelize/db/database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync().then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.findAll().then(users => {
  console.log(users)
})

exports.db = sequelize