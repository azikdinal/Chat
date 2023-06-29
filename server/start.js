const {server} = require('./server')
const PORT = process.env.PORT || 5000
const sequelize = require('./db/db')
const listenToTableChanges = require("./db/table_change_listener");

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await listenToTableChanges()
        await server.listen(PORT, err => {
            if (err) console.log(err)
            console.log('Server is running on Port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }

}

module.exports = start