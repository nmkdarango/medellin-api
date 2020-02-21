const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

//Models
const {Users} = require('../models');

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

//My crud
server.post('/users', (req,res) => {

    const {firstname,lastname, email} = req.body;
    const document = { firstname, lastname,email}

    Users.create(document)
    .then(user=> res.status(201).json({message:"Creado correctamente", data:user}))
    .catch(error => res.status(400).json({message:"Error al crear usuarios", data:error}));
} );

server.get('/users/:id',(req,res)=>{
  const {id} = req.params;
  Users.findById(id)
  .then(user => res.status(200).json({message:"Ok",data:user}))
  .catch(error => res.status(400).json({message:"Ocurriò un error al obtener el usuario", data:error}));
});

server.patch('users/:id', (req,res)=>{

});

module.exports = { 
  server,
  PORT
}; 