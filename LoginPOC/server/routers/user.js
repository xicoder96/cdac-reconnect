const express = require('express')
const userController = require('../user/user.controller')
const auth = require('../_middleware/basic-auth')

const router = express.Router()

//Register User into system
router.post('/users', userController.registerUser)

//Login a registered user
router.post('/users/login', userController.authenticate)

//Logout
router.post('/users/me/logout', auth, userController.logout)
//Logout From all devices
router.post('/users/me/logoutall', auth, userController.logoutAll)

module.exports = router