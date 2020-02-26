const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: (user) => {
    // TODO: Get expiration date
    // const date = new Date();
    // date.setDate(date.getDate() + 1); // Token lasts one day
    // const exp = Date(date).getTime() / 1000;
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      email: user.email,
      first_name: user.first_name,
      // exp,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
  },
};
