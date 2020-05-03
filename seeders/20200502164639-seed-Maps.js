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

    return queryInterface.bulkInsert('Maps', [
      // Razzia de Gemmes
      {
        name: 'Arcade cristalline',
        cat: 'Razzia de gemmes',
        image: 'https://www.starlist.pro/assets/map-high/Crystal-Arcade.png?v=6',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        name: 'Bruissements',
        cat: 'Razzia de gemmes',
        image: 'https://www.starlist.pro/assets/map-high/Double-Swoosh.png?v=5',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      // Survivant
      {
        name: 'Famine ou festin',
        cat: 'Survivant',
        image: 'https://www.starlist.pro/assets/map-high/Feast-or-Famine-Duo.png?v=5',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        name: 'Caverne bouillonnante',
        cat: 'Survivant',
        image: 'https://www.starlist.pro/assets/map-high/Cavern-Churn-Duo-Halloween.png?v=5',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      // Braquage
      {
        name: 'Arret au Stand',
        cat: 'Braquage',
        image: 'https://www.starlist.pro/assets/map-high/Pit-Stop.png?v=4',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        name: 'C\'est chaud patate',
        cat: 'Braquage',
        image: 'https://www.starlist.pro/assets/map-high/Hot-Potato.png?v=4',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      // Prime
      {
        name: 'Prairie au serpents',
        cat: 'Prime',
        image: 'https://www.starlist.pro/assets/map-high/Snake-Prairie.png?v=5',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        name: 'Mille-feuilles',
        cat: 'Prime',
        image: 'https://www.starlist.pro/assets/map-high/Layer-Cake.png?v=4',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      // Brawlball
      {
        name: 'Ligue junior',
        cat: 'Brawball',
        image: 'https://www.starlist.pro/assets/map-high/Backyard-Bowl.png?v=4',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        name: 'Arène déformée',
        cat: 'Brawball',
        image: 'https://www.starlist.pro/assets/map-high/Warped-Arena.png?v=1',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      // Siège
      {
        name: 'Ecrous et Boulons',
        cat: 'Siège',
        image: 'https://www.starlist.pro/assets/map-high/Nuts-&-Bolts.png?v=4',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        name: 'Ligne d\'assemblage',
        cat: 'Siège',
        image: 'https://www.starlist.pro/assets/map-high/Some-Assembly-Required.png?v=4',
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
