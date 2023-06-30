const {Chat, Message, UserChat} = require('../db/models');

class ChatController {
    async create(req, res) {
        try {
            const {userId} = req.body
            const chat = await Chat.create({})
            const chatId = chat.id
            const userChat = await UserChat.create({userId, chatId})
            return res.json(userChat)
        } catch (e) {
            console.log(e)
            return res.status(400).json({"message": "bad request"})
        }
    }

    async get_chats_by_userId(req, res) {
        try {
            const {userId} = req.params
            // here chats mean UserChat array
            const chats = await UserChat.findAll(
                {where: {userId}}
            );
            return res.json(chats);
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "bad request"})
        }
    }

}

module.exports = new ChatController()