const express = require('express')
const router = express.Router()
const MessageController = require('../controllers/MessageController')

router.get('/:id', MessageController.get_one)
router.get('/chat/:chatId', MessageController.get_chat_messages)
router.get('/', MessageController.get_all)
router.delete('/:id', MessageController.delete_one)
router.delete('/', MessageController.delete_all)
router.post('/send', MessageController.create)


module.exports = router