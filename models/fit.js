'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fit.init({
    nickname: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    favorite: DataTypes.BOOLEAN,
    duration: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'fit',
  });
  return fit;
};