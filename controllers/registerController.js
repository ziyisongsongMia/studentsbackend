const express = require('express')
const router = express.Router() //declare the variable
//const app = express()
const mysql = require('mysql')
//app.use(express.json())

exports.register = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  const email = req.body.email
  const password = req.body.password
  const address = req.body.address
  const authProvider = req.body.authProvider
  const gender = req.body.gender
  const id = req.body.id
  const name = req.body.name
  const postcode = req.body.postcode
  const uid = req.body.uid
  const apikey = req.body.apikey

  db.query(
    'INSERT INTO users (address, authProvider, email,id, name, password, gender, postcode, uid, apikey) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      address,
      authProvider,
      email,
      id,
      name,
      password,
      gender,
      postcode,
      uid,
      apikey,
    ],
    (err, result) => {
      if (result) {
        db.query(
          'INSERT INTO apikey (email, apikey) VALUES (?, ?)',
          [email, apikey],
          (err, result) => {
            if (result) {
              res.send({ message: true })
            }
          }
        )
      } else {
        res.send({ message: false })
      }
    }
  )
}
