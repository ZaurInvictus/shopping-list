const express = require('express')
const helmet = require('helmet') // adding Helmet to enhance API's security
const cors = require('cors') // enabling CORS for all requests

// IMPORT ROUTES
const items = require('../routes/item-routes')


const server = express()
// 3rd PARTY MIDDLEWARE
server.use(express.json())
server.use(helmet())
server.use(cors())


// ROUTES
server.use('/api/items', items)



// SERVER IS UP
server.get('/', (req, res) => {
    res.status(200).json({
      message: 'shopping list\'s server is up'
    })
})
  
  
module.exports = server