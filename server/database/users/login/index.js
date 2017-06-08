const db = require( '../../connection' )
const bcrypt = require( 'bcrypt' )

const LOGIN = 'SELECT * FROM users WHERE email=${email}'

const comparePassword = plainTextPassword => user => {
  const { id, email, username, lat, long, salt, password: encryptedPassword } = user

  return bcrypt.compare( plainTextPassword, encryptedPassword )
    .then( valid => {
      if( valid ) {
        return { id, email, username, lat, long }
      } else {
        throw new Error('User not found')
      }
    })
}

const login = ({ email, password }) => 
  db.one( LOGIN, { email })
    .then( comparePassword( password ))

module.exports = login