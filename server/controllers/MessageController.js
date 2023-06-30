const {Message, Chat, ChatMessage} = require('../db/models');

class MessageController {
    async send(req, res) {
        try {
            const {text, chatId} = req.body;
            const message = await Message.create({text});
            const messageId = message.id
            const chatMessage = await ChatMessage.create({chatId, messageId});
            return res.json(chatMessage);
        } catch (e) {
            console.log(e)
            return res.status(400).json("Bad request")
        }
    }


    async get_chat_messages(req, res) {
        try {
            const {chatId} = req.params
            const messages = await ChatMessage.findAll({where: {chatId}})
            return res.json(messages)
        } catch (e) {
            console.log(e)
            return res.status(400).json("Bad request")
        }
    }

}

module.exports = new MessageController();