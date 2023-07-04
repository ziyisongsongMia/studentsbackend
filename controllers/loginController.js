const express = require('express')
const router = express.Router()

const mysql = require('mysql')

exports.login = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
      if (err) {
        req.setEncoding({ err: err })
      } else {
        if (result.length > 0) {
          res.send(result)
        } else {
          res.send({ message: 'WRONG USERNAME OR PASSWORD!' })
        }
      }
    }
  )
}
