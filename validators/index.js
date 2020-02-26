const userValidator = require('./userValidator');

module.exports = {
  userValidator,
  errorOne: (error, req, res, next) => {
    if (error.joi) {
      return res.status(400).json({ error: error.joi.message });
    }
    return next();
    // return res.status(500).send(error)
  },
};
