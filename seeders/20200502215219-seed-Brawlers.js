'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   const axios = require('axios')

    let seed = []

    await axios({
      method: 'get',
      url: 'https://bridge.buddyweb.fr/api/brawlstars/brawlers'
      
    }).then((response) => {
      response['data'].forEach(brawler => {
        seed.push({
          nom: brawler['nom'],
          rarete: brawler['rarete'],
          points_de_vie: brawler['points_de_vie'],
          degats_attaque_primaire: brawler['degats_attaque_primaire'],
          degats_attaque_super: brawler['degats_attaque_super'],  
          vitesse: brawler['vitesse'],
          description: brawler['description'],
          image: brawler['image'],
          image3d: brawler['image3d'],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
    })

    return queryInterface.bulkInsert('Brawlers', seed);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Brawlers', null, {});
  }
};
