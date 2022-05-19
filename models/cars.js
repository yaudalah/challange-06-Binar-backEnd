'use strict';

module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = sequelize.Sequelize;
  class Cars extends Model {}
  Cars.init({
    plate: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    model: DataTypes.STRING,
    createdby: DataTypes.INTEGER,
    updateby: DataTypes.INTEGER,
    deleteby: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cars',
    tableName: 'Cars',


  });
  return Cars;
};