const express = require('express')
const router = express()

const homeRouter = require('../../routes/home')
router.use('/home', homeRouter)

const announceRouter = require('../../routes/announces')
router.use('/announce', announceRouter)

module.exports = router
