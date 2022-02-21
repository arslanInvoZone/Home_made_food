'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invoices.init({
    menu:{
      type:DataTypes.STRING,
      allowNull:false
    },
    total_meals:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    total_amount:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    status:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'invoices',
  });
  return invoices;
};