const express = require('express')
const router = express.Router()
const userController = require('../controllers/authController')

router.route('/').get(userController.getIndexPage)

module.exports = router
