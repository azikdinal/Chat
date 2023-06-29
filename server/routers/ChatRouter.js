const express = require('express')
const router = express.Router()
const ChatController = require('../controllers/ChatController')

router.get('/:id', ChatController.get_one)
router.get('/user/:userId', ChatController.get_chat_by_user_id)
router.get('/', ChatController.get_all)
router.delete('/:id', ChatController.delete_one)
router.delete('/', ChatController.delete_all)
router.post('/open', ChatController.create)


module.exports = router