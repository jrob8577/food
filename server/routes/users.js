const express = require('express')
const router = express.Router()

const { User } = require( '../database' )

router.post( '/sign-up', (request, response) => {
  const { username, email, password, password_verified, latitude, longitude } = request.body

  User.signUp({ username, email, password, password_verified, latitude, longitude })
    .then( user => response.status(201).json( user ))
    .catch( error => response.status(500).json({ error: error.message  }))
})

module.exports = router
