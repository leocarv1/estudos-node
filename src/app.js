const express = require("express")
const cors = require('cors')
const route = require('./routes/routes')

require('dotenv').config();

require('./db/index')

const app = express()

app.use(express.json())
app.use(cors())
app.use(route)

module.exports = app