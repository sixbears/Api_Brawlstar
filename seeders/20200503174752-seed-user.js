'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [{
    username: 'admin',
    firstname: 'Jules',
    lastname: 'Vendee',
    password: '$2a$10$6TiFVJlV1uc8/0nXL0Y1UOLb7TmELUSoILdfFTKy7hGCQfPlSDLEK',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});

  }
};
