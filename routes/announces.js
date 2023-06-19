const express = require('express')
const announceController = require('../controllers/announceController')

const router = express.Router()

router.route('/add').get(announceController.getAddAnnounce).post(announceController.postAddAnnounce)
router.route('/delete/:id').get(announceController.getDeleteAnnounce)

module.exports = router
