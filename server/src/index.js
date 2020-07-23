const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const http = require('http')
const env = require('dotenv')
const handler = require('./error/handler')

env.config()

const app = express()

const server = http.Server(app);

const dbUrl = process.env.DB_HOST
                .replace('{{db-user}}', process.env.DB_USER)
                .replace('{{db-password}}', process.env.DB_PASSWORD)
                .replace('{{db-name}}', process.env.DB_NAME)

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(handler)

server.listen(process.env.PORT || 3333)