'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let users = []
    for (let index = 0; index < 3; index++) {
      users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
    }

    return queryInterface.bulkInsert('Users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
}
