const express = require('express');
const router = express.Router(); // Create a router instance

const MessageRouter = require('./messageRouter');
const UserRouter = require('./userRouter');
const ChatRouter = require('./ChatRouter');

router.use('/message', MessageRouter);
router.use('/user', UserRouter)
router.use('/chat', ChatRouter)

module.exports = router;