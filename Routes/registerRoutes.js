const express = require('express')
const router = express.Router() //declare the variable

const registerController = require('../controllers/registerController.js')

router.route('/').post(registerController.register)

module.exports = router
