const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');

module.exports = {

    createUser: celebrate({
        [Segments.BODY]: Joi.object().keys({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().email().required(),
                // .error(new Error('Email is a required field motherfuker!')),
            password: Joi.string().required(),
            is_active: Joi.bool()
        })
      })

}

