'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brawlers = sequelize.define('Brawlers', {
    nom: DataTypes.STRING,
    rarete: DataTypes.STRING,
    points_de_vie: DataTypes.STRING,
    degats_attaque_primaire: DataTypes.STRING,
    degats_attaque_super: DataTypes.STRING,
    vitesse: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    image3d: DataTypes.STRING
  }, {});
  Brawlers.associate = function(models) {
    // associations can be defined here
  };
  return Brawlers;
};