const express = require('express')
const {sign, login, check} = require("../controllers/UserController");
const router = express.Router()

router.post('/sign', sign)
router.post('/login', login)
router.post('/check', check)

module.exports = router