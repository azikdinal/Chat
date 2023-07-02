const PORT = process.env.PORT || 5000
const sequelize = require('./db/db')
const {server, io} = require("./server");
const {listenToChatTableChanges} = require("./db/table_change_listener");
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        await server.listen(PORT, err => {
            if (err) console.log(err)
            console.log('Server is running on Port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }

}

module.exports = start