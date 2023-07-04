const express = require('express')
const router = express.Router() //declare the variable
const loginController = require('../controllers/loginController.js')

router.route('/').post(loginController.login)

module.exports = router
