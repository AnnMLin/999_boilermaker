const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

// routes
const { user } = require('./routes')
app.use('/user', user)

// send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app