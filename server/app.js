const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const users = require('./routes/users')

const errorHandler = require('./handlers/serverError')
const notFoundHandler = require('./handlers/notFound')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/users', users)

app.use( notFoundHandler )
app.use( errorHandler )

module.exports = app
