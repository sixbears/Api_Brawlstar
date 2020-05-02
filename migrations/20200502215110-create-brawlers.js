'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Brawlers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      rarete: {
        type: Sequelize.STRING
      },
      points_de_vie: {
        type: Sequelize.STRING
      },
      degats_attaque_primaire: {
        type: Sequelize.STRING
      },
      degats_attaque_super: {
        type: Sequelize.STRING
      },
      vitesse: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      image3d: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Brawlers');
  }
};