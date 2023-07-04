const express = require('express')
const router = express.Router() //declare the variable
const userInfoController = require('../controllers/userInfoController.js')

router.route('/:id').put(userInfoController.updateUserInfo)

module.exports = router
