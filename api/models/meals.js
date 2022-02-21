'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  meals.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    status:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'meals',
  });
  return meals;
};