const express = require('express')
const router = express.Router()
const mysql = require('mysql')

exports.updateUserInfo = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  let userId = req.params.id
  const q =
    'UPDATE users SET `email`= ?, `name`= ?, `gender`=?, `address`=?,`postcode`= ? WHERE id = ?'

  const values = [
    req.body.email,
    req.body.name,
    req.body.gender,
    req.body.address,
    req.body.postcode,
  ]

  db.query(q, [...values, userId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}
