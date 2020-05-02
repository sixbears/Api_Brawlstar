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

   return queryInterface.bulkInsert('Maps', [{
    name: 'Arcade cristalline',
    cat: 'Razzia de gemmes',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    name: 'Arret au Stand',
    cat: 'Braquage',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    name: 'Ligue junior',
    cat: 'Brawball',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    name: 'Prairie au serpents',
    cat: 'Prime',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Maps', null, {});
  }
};
