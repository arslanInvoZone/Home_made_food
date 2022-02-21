'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      menu: {
        type: DataTypes.STRING,
        allowNull:false
      },
      total_meals: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      total_amount: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      status: {
        type: DataTypes.STRING,
        allowNull:false
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
    await queryInterface.dropTable('invoices');
  }
};