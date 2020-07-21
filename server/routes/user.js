const express = require('express')
const router = express.Router()
const { User } = require('../db')

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).send(transactions)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router