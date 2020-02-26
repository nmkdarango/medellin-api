const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    if (token.startsWith('Bearer ')) {
      // 'Bearer JWT'
      token = token.slice(7, token.length);
    } else {
      return res.status(403).send({ message: 'Auth token missing first argument' });
    }
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: 'Token is not valid' });
      }
      req.decoded = decoded;
      return next();
    });
  }
  return res.status(403).send({ message: 'Auth token is not supplied' });
};
