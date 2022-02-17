const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const UserRoutes = require('./routes/User')
const {sequelize} = require('./models')
const bodyParser = require('body-parser')
const heltmet = require('helmet')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
require('./auth/passport')
//middleware

app.use(express.json())
app.use(cors())
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(heltmet())
//database connection
//Test DB

  

//routes
app.use('/api/users',UserRoutes)

//server
app.listen(5000, async() => {
    console.log("Backend server is running!".underline.bold.yellow);
    await sequelize.authenticate()
  .then(()=>console.log("Database Connected...".underline.green.bold))
  .catch((err)=>console.log(`Error, ${err}`.red.underline))
  });