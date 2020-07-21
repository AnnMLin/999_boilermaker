const express = require('express')
const router = express.Router()
const { User } = require('../db')

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => {
      console.log(users)
      res.status(200).send(users)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router