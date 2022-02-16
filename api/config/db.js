import  Sequelize  from "sequelize";

const db = new Sequelize('home_food_app', 'postgres', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });


export default db