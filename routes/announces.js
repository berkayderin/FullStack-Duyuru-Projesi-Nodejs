const express = require('express')
const announceController = require('../controllers/announceController')

const router = express.Router()

router.route('/add').get(announceController.getAddAnnounce)

module.exports = router
