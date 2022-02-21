'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      menus.belongsToMany(models.users,{through:'users_menus'})
    }
  }
  menus.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    menu_name:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subscribed:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    }
  }, {
    sequelize,
    modelName: 'menus',
  });
  return menus;
};