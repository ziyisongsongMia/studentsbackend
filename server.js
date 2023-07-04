const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const dotenv = require('dotenv')
const authKeyController = require('./controllers/authKey')
const registerRouter = require('./Routes/registerRoutes')
const loginRouter = require('./Routes/loginRoutes')
const studentsRouter = require('./Routes/studentsRoutes')
const coursesRouter = require('./Routes/coursesRoutes')
const userInfoRouter = require('./Routes/userInfoRoutes')

dotenv.config()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

db.connect(function (err) {
  if (err) {
    console.log(err)
  }
  console.log('Connected successfully!')
})

app.use('/register', registerRouter)
app.use('/login', loginRouter)

/* app.all('*', (req, res, next) => {
  authenticateKey
}) */
app.use('/students/:apikey', authKeyController.authenticateKey, studentsRouter)
app.use(
  '/coursesInfo/:apikey',
  authKeyController.authenticateKey,
  coursesRouter
)
app.use('/userInfo/:apikey', authKeyController.authenticateKey, userInfoRouter)

app.listen(process.env.PORT, () => {
  console.log('running backend server')
})
