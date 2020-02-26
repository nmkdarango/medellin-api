const jwt = require('jsonwebtoken');

module.exports = {
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
