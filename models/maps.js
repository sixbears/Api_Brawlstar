'use strict';
module.exports = (sequelize, DataTypes) => {
  const Maps = sequelize.define('Maps', {
    name: DataTypes.STRING,
    cat: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Maps.associate = function (models) {
    // associations can be defined here
  };
  return Maps;
};