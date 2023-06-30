const express = require('express')
const router = express.Router()
const ChatController = require('../controllers/ChatController')

router.post('/', ChatController.create)
router.get('/:userId', ChatController.get_chats_by_userId)


module.exports = router