'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('meals', [
       {
        name: 'Meal 1',
        status:'PENDING',
        createdAt: new Date(), 
        updatedAt: new Date()
       },
       {
        name: 'Meal 2',
        status:'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Meal 3',
        status:'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Meal 4',
        status:'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Meal 5',
        status:'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Meal 6',
        status:'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Meal 7',
        status:'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('meals', null, {});
  }
};
