const {Message, Chat, ChatMessage} = require('../db/models');

const send = async (req, res) => {
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


const get_chat_messages = async (req, res) => {
    try {
        const {chatId} = req.params
        const messages = await ChatMessage.findAll({where: {chatId}})
        return res.json(messages)
    } catch (e) {
        console.log(e)
        return res.status(400).json("Bad request")
    }
}

const get_one = async (req, res) => {
    try {
        const {id} = req.params
        const message = await Message.findOne({where: {id}})
        return res.json(message)
    } catch (e) {
        console.log(e)
        return res.status(400).json("Bad request")

    }
}

module.exports = {send, get_chat_messages, get_one}