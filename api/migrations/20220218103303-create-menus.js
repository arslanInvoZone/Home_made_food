'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      menu_name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false
      },
      image: {
        type: DataTypes.STRING,
        allowNull:false
      },
      subscribed:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('menus');
  }
};