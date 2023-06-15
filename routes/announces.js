const express = require('express')
const announceController = require('../controllers/announceController')

const router = express.Router()

router.route('/create').get(announceController.createAnnounce)

module.exports = router
