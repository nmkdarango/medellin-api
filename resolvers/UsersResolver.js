const { Users } = require('../models');

module.exports = {
  create: (body) => Users.create(body),
  find: () => Users.find({ is_active: true }),
  findById: (id) => Users.findOne({ _id: id, is_active: true }),
  findByIdAndUpdate: (id, body) => Users.findOneAndUpdate({ _id: id, is_active: true }, body, {
    new: true,
    useFindAndModify: false,
  }),
  findByIdAndDelete: (id) => Users.findOneAndUpdate(
    { _id: id, is_active: true },
    { is_active: false },
    { useFindAndModify: false },
  ),
};
