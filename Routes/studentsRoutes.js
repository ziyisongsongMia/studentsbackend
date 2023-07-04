const express = require('express')
const router = express.Router() //declare the variable
const studentsController = require('../controllers/studentsController.js')

router
  .route('/')
  .get(studentsController.getStudent)
  .post(studentsController.createStudent)

router
  .route('/:id')
  .put(studentsController.updateStudent)
  .delete(studentsController.deleteStudent)

module.exports = router
