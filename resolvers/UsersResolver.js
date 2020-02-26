const { Users } = require('../models');

module.exports = {
  create: (body) => new Users(body).save(),
  find: () => Users.find({ is_active: true }),
  findById: (id) => Users.findOne({ _id: id, is_active: true }),
  findByEmail: (email) => Users.findOne({ email, is_active: true }),
  update: (user, body) => {
    // eslint-disable-next-line no-param-reassign
    user = Object.assign(user, body);
    return user.save();
  },
  findByIdAndDelete: (id) => Users.findOneAndUpdate(
    { _id: id, is_active: true },
    { is_active: false },
    { useFindAndModify: false },
  ),
  validatePassword: (user, password) => new Promise((resolve, reject) => {
    user.comparePassword(password, (err, isMatch) => {
      if (err) reject(err);
      return resolve(isMatch);
    });
  }),
};
