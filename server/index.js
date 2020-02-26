const express = require('express');

const server = express();
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const routes = require('../routes');

const PORT = process.env.PORT || 3000;

const { getRequestDate } = require('../utils');

// parse application/x-www-form-urlencoded and application/json
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// show the time the request was made
server.use(getRequestDate);

// import all routes
server.use('/api/v1', routes);

// root endpoint
server.get('/', (req, res) => res.send('Hello World!'));

server.use(errors());

module.exports = {
  server,
  PORT,
};
