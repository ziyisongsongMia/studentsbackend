const express = require('express')
const router = express.Router() //declare the variable
const coursesController = require('../controllers/coursesController.js')

router
  .route('/')
  .get(coursesController.getCourse)
  .post(coursesController.createCourse)

router
  .route('/:id')
  .put(coursesController.updateCourse)
  .delete(coursesController.deleteCourse)

module.exports = router
