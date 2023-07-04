const express = require('express')
const router = express.Router()
const mysql = require('mysql')

exports.getStudent = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  const q = 'SELECT * FROM studentstable'
  db.query(q, (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)
    }

    return res.json(data)
  })
}

exports.createStudent = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  const q =
    'INSERT INTO studentstable(`birthdate`, `courses_selected`, `email`, `firstname`,`id`,`key`,`lastname`,`name`,`phone`,`selected_courses_keys`,`sex`) VALUES (?)'

  const values = [
    req.body.birthdate,
    req.body.courses_selected,
    req.body.email,
    req.body.firstname,
    req.body.id,
    req.body.key,
    req.body.lastname,
    req.body.name,
    req.body.phone,
    req.body.selected_courses_keys,
    req.body.sex,
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}

exports.updateStudent = (req, res) => {
  const studentId = req.params.id
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  const q =
    'UPDATE studentstable SET `birthdate`= ?, `courses_selected`= ?, `email`= ?, `firstname`= ?,`id`= ?,`key`= ?,`lastname`= ?,`name`= ?,`phone`= ?,`selected_courses_keys`= ?,`sex`= ? WHERE id = ?'

  const values = [
    req.body.birthdate,
    req.body.courses_selected,
    req.body.email,
    req.body.firstname,
    req.body.id,
    req.body.key,
    req.body.lastname,
    req.body.name,
    req.body.phone,
    req.body.selected_courses_keys,
    req.body.sex,
  ]

  db.query(q, [...values, studentId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}

exports.deleteStudent = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  const studentId = req.params.id
  const q = ' DELETE FROM studentstable WHERE id = ? '

  db.query(q, [studentId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}
