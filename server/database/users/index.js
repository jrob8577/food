const db = require( '../connection' )

const SIGN_UP = 'INSERT INTO users ( password, salt, username, email, lat, long ) VALUES ( ${password}, ${salt}, ${username}, ${email}, ${lat}, ${long} ) RETURNING id, username, email'

module.exports = {
  signUp: user => db.one( SIGN_UP, user )
}