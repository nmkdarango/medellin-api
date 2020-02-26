const jwt = require('jsonwebtoken');

module.exports = {
  getRequestDate: (req, res, next) => {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    const year = date.getFullYear();
    const month = date.getMonth(); // beware: January = 0; February = 1, etc.
    const day = date.getDate();

    const dateString = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;

    // eslint-disable-next-line no-console
    console.log(`Fecha de petición: ${dateString}`);
    next();
  },
  generateToken: (user) => {
    const exp = new Date();
    exp.setDate(exp.getDate() + 1); // Token lasts one day
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      email: user.email,
      first_name: user.first_name,
      exp,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
  },
};
