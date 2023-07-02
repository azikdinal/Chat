const express = require('express')
const {send, get_chat_messages, get_one} = require("../controllers/MessageController");
const router = express.Router()

router.post('/', send)
router.get('/chat/:chatId', get_chat_messages)
router.get('/:id', get_one)


module.exports = router