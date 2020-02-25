const express = require('express');
const userValidator = require('./userValidator')


module.exports = {
    userValidator, 
    errorOne: (error, req, res, next) => {
        if (error.joi) {
          console.log('Hey!');
          return res.status(400).json({error: error.joi.message});
        }
        console.log('Estoy entrando');
        next();
        //return res.status(500).send(error)
      }
}



