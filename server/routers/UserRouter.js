const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/sign', UserController.sign)
router.post('/login', UserController.login)
router.post('/check', UserController.check)

module.exports = router