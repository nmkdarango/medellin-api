const express = require('express');

const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

router.use(require('./UsersRoutes'));

module.exports = router;
