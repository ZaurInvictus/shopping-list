const express = require('express')
const helmet = require('helmet') // adding Helmet to enhance API's security
const cors = require('cors') // enabling CORS for all requests

// IMPORT ROUTES
//const posts = require('../routes/post-routes')


const server = express()
// 3rd PARTY MIDDLEWARE
server.use(express.json())
server.use(helmet())
server.use(cors())


// ROUTES
// server.use('/api/posts', posts)



// SERVER IS UP
server.get('/', (req, res) => {
    res.status(200).json({
      message: 'shopping list\'s server is up'
    })
})
  
  
module.exports = server