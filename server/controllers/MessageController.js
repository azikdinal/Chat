const {Message, Chat} = require('../db/models');

class MessageController {
    async get_one(req, res) {
        try {
            const {id} = req.params
            const message = await Message.findOne(
                {where: {id}}
            );
            return res.json(message);
        } catch (e) {
            console.log(e)
        }

    }

    async get_all(req, res) {
        try {
            const messages = await Message.findAll();
            return res.json(messages);
        } catch (e) {
            console.log(e)
        }
    }

    async get_chat_messages(req, res) {
        try {
            const {chatId} = req.params
            const messages = await Message.findAll({where: {chatId}})
            return res.json(messages)
        } catch (e) {
            console.log(e)
            return res.status(500).json({error: 'Iternal Server Error'})
        }
    }

    async delete_all(req, res) {
        try {
            const messages = await Message.destroy({where: {}});
            return res.json(messages);
        } catch (e) {
            console.log(e)
        }

    }

    async delete_one(req, res) {
        try {
            const {id} = req.params
            const deletedMessage = await Message.destroy(
                {where: {id}}
            );
            return res.json({
                "message": deletedMessage,
                "status": "deleted"
            });
        } catch (e) {
            console.log(e)
        }

    }

    async create(req, res) {
        try {
            const {text, isUser, chatId, userId} = req.body;
            const createdMessage = await Message.create({text, isUser, chatId, userId});
            return res.json(createdMessage);
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new MessageController();