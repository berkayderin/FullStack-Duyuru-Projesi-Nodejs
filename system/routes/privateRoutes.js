const express = require('express')
const router = express()

const homeRouter = require('../../routes/home')
router.use('/home', homeRouter)

const announcesRouter = require('../../routes/announces')
router.use('/announces', announcesRouter)

module.exports = router
