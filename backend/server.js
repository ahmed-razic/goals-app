const express = require('express')
const dotenv = require('dotnev').config()
const port = 5000

const app = express()

app.listen(port, () => {
  console.log(`Server started at port ${port}.`)
})
