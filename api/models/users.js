'use strict';
const {
  Model
} = require('sequelize');
const menus = require('./menus');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.menus,{through:'users_menus'})
    }
  }
  users.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    admin:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    } 
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};