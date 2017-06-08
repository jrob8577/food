const protect = (request, response, next) => {
  const { user_id } = request.cookies

  if( user_id === undefined ) {
    response.status(401).json({})
  } else {
    request.user = { id: user_id }
    next()
  }
}

module.exports = protect