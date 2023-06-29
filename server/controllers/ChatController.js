const {Chat, Message} = require('../db/models');

class ChatController {
    async create(req, res) {
        try {
            const {name, userId} = req.body
            const chat = await Chat.create({name, userId})
            return res.json(chat)
        } catch (e) {
            console.log(e)
            return res.status(404).json({"message" :"bad request"})
        }
    }
    async get_one(req, res) {
        try {
            const {id} = req.params
            const tookChat = await Chat.findOne(
                {where: {id}}
            );
            return res.json(tookChat);
        } catch (e) {
            console.log(e)
        }
    }
    async get_chat_by_user_id(req, res) {
        try {
            const {userId} = req.params
            const chats = await Chat.findAll(
                {where: {userId}}
            );
            return res.json(chats);
        } catch (e) {
            console.log(e)
            return res.status(400).json({message:"bad request"})
        }
    }
    async get_all(req, res) {
        try {
            const chats = await Chat.findAll();
            return res.json(chats);
        } catch (e) {
            console.log(e)
        }
    }

    async delete_all(req, res) {
        try {
            const chats = await Chat.destroy({where: {}});
            return res.json(chats);
        } catch (e) {
            console.log(e)
        }
    }
    async delete_one(req, res) {
        try {
            const {id} = req.params
            const chat = await Chat.destroy({where: {id}});
            return res.json(chat);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ChatController()