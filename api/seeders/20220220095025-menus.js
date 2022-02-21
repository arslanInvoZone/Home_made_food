'use strict';
const { v4: uuidv4 } = require('uuid')
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
     await queryInterface.bulkInsert('menus', [{
      uuid: uuidv4(),
      menu_name: 'Vegiterian',
      description:'Vegiterain Food is a perfect party dish and a fun meal to to coock together with your guests',
      image:'http://koreabizwire.com/wp/wp-content/uploads/2019/11/48633232_m.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      uuid: uuidv4(),
      menu_name: 'Desi Food',
      description:'Desi Food is a perfect party dish and a fun meal to to coock together with your guests',
      image:'https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/05/cover-image-25-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        uuid: uuidv4(),
        menu_name: 'Chineese Food',
        description:'Chineese Food is a perfect party dish and a fun meal to to coock together with your guests',
        image:'https://propakistani.pk/foodnama/wp-content/uploads/2021/12/home-delivery-of-indian-chinese-.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuidv4(),
        menu_name: 'Fast Food',
        description:'Fast Food is a perfect party dish and a fun meal to to coock together with your guests',
        image:'https://khappa.pk/wp-content/uploads/2018/10/ff1-768x514.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuidv4(),
        menu_name: 'Sea Food',
        description:'Sea Food is a perfect party dish and a fun meal to to coock together with your guests',
        image:'https://getbusinessstrategy.com/wp-content/uploads/2021/05/5ebc0ff0fc593d02e70c2633.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuidv4(),
        menu_name: 'Arabian Food',
        description:'Arabian Food is a perfect party dish and a fun meal to to coock together with your guests',
        image:'https://www.foodies.pk/wp-content/uploads/2020/04/lebanese-food-dishes-on-table-scaled.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('menus', null, {});
  }
};
