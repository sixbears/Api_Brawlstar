'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams', {
    title: DataTypes.STRING,
    brawlers: DataTypes.STRING,
    map: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Teams.associate = function(models) {
    Teams.belongsTo(models.User, {
      foreignKey: 'userId'
    })

  };
  return Teams;
};