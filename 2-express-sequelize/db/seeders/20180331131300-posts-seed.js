'use strict';

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
    const rand = (max, min) => (Math.random() * (max-min)+max)

    let posts = [];
    for (let index = 0; index < 3; index++) {
      posts.push({
        title: faker.lorem.sentence( rand(10,5) ),
        content: faker.lorem.paragraph( rand(5,1) ),
        userId: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })      
    }

    return queryInterface.bulkInsert('Posts', posts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
