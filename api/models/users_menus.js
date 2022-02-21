'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_menus.init({
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    menuId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'users_menus',
  });
  return users_menus;
};