const express = require('express')
const router = express.Router()
const mysql = require('mysql')

exports.getCourse = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  const q = 'SELECT * FROM coursestable'
  db.query(q, (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)
    }
    return res.json(data)
  })
}

exports.createCourse = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  const q =
    'INSERT INTO coursestable(`course`,`department`,`email`,`id`,`instructor`,`key`,`location`,`phone`,`time`) VALUES (?)'

  const values = [
    req.body.course,
    req.body.department,
    req.body.email,
    req.body.id,
    req.body.instructor,
    req.body.key,
    req.body.location,
    req.body.phone,
    req.body.time,
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}

exports.updateCourse = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  const courseId = req.params.id
  const q =
    'UPDATE coursestable SET `course`=?,`department`=?,`email`=?,`id`=?,`instructor`=?,`key`=?,`location`=?,`phone`=?,`time`=? WHERE id =?'

  const values = [
    req.body.course,
    req.body.department,
    req.body.email,
    req.body.id,
    req.body.instructor,
    req.body.key,
    req.body.location,
    req.body.phone,
    req.body.time,
  ]

  db.query(q, [...values, courseId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}

exports.deleteCourse = (req, res) => {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  const courseId = req.params.id
  const q = 'DELETE FROM coursestable WHERE id = ?'

  db.query(q, [courseId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
}
