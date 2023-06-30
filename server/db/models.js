const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')

const INTEGER = DataTypes.INTEGER
const STRING = DataTypes.STRING
const BOOLEAN = DataTypes.BOOLEAN

const Message = sequelize.define('message', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: STRING,
    }
});

const User = sequelize.define('user', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: STRING
    },
    password: {
        type: STRING
    }
})

const Chat = sequelize.define('chat', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

const UserChat = sequelize.define('user-chat', {
    userId: {
        type: INTEGER,
        allowNull:false

    },
    chatId: {
        type: INTEGER,
        allowNull:false
    }
})

const ChatMessage = sequelize.define('chat-message',{
    chatId: {
        type: INTEGER,
        allowNull:false
    },
    messageId: {
        type: INTEGER,
        allowNull:false

    }
})

UserChat.belongsTo(User, {
    foreignKey: 'userId'
})

UserChat.belongsTo(Chat, {
    foreignKey: 'chatId'
})

ChatMessage.belongsTo(Chat, {
    foreignKey: 'chatId'
})

ChatMessage.belongsTo(Message, {
    foreignKey: 'messageId'
})


module.exports = {
    Message,
    User,
    Chat,
    UserChat,
    ChatMessage
}