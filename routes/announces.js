const express = require('express')
const announceController = require('../controllers/announceController')

const router = express.Router()

router.route('/add').get(announceController.getAddAnnounce).post(announceController.postAddAnnounce)
// router.route('/edit/:id').get(announceController.getEditAnnounce).post(announceController.postEditAnnounce)
router.route('/delete/:id').get(announceController.getDeleteAnnounce)

module.exports = router
