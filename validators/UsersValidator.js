const { celebrate, Joi } = require('celebrate');

module.exports = {
  UserCreateValidator: celebrate({
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string(),
    }),
  }),
};
