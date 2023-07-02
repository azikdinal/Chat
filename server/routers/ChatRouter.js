const express = require('express')
const {create, get_chats_by_userId} = require("../controllers/ChatController");
const router = express.Router()

router.post('/', create)
router.get('/:userId', get_chats_by_userId)


module.exports = router