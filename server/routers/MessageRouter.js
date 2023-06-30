const express = require('express')
const router = express.Router()
const MessageController = require('../controllers/MessageController')

router.post('/', MessageController.send)
router.get('/:chatId', MessageController.get_chat_messages)


module.exports = router