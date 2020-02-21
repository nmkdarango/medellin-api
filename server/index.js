const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
server.use(bodyParser.json())

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

module.exports = { 
  server,
  PORT
}; 