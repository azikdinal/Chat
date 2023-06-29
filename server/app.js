const express = require('express')
const app = express()
const router = require('./routers/index')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/api', router)

module.exports = app;