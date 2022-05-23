//middleware executes during request - response cycle, when a request is made
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500 //500 is server error

  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = {
  errorHandler,
}
