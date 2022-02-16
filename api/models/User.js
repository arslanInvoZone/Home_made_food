import Sequelize from 'sequelize'
import db from '../config/db.js'

const User = db.define('users',{
    user_name:{
        type:Sequelize.STRING
    },
    user_email:{
        type:Sequelize.STRING
    },
    admin:{
        type:Sequelize.BOOLEAN,
        default:false
    },
    user_password:{
        type:Sequelize.STRING
    }
}) 

export default User