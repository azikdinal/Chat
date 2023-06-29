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
    text:{
        type:STRING,
    }
});

const User = sequelize.define('user', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type:STRING
    },
    password:{
        type:STRING
    }
})

const Chat = sequelize.define('chat', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

User.hasMany(Message, {
    foreignKey: 'userId',
});
User.hasMany(Chat, {
    foreignKey: 'chatId',
});

Chat.hasMany(Message, {
    foreignKey: 'chatId',
});

Message.belongsTo(User, {
    foreignKey: 'userId',
});

Message.belongsTo(Chat, {
    foreignKey: 'chatId',
});
Chat.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = {
    Message,
    User,
    Chat
}