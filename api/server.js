import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import db from './config/db.js'
import UserRoutes from './routes/User.js'
const app = express()
//middleware

app.use(express.json())
app.use(cors())
app.use(morgan("common"))

//database connection
//Test DB

  db.authenticate()
  .then(()=>console.log("Database Connected...".underline.green.bold))
  .catch((err)=>console.log(`Error, ${err}`.red.underline))

//routes
app.use('/api/users',UserRoutes)

//server
app.listen(5000, () => {
    console.log("Backend server is running!".underline.bold.yellow);
  });