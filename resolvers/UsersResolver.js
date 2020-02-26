const { Users } = require('../models');

module.exports = {
  create: (body) => Users.create(body),
  find: () => Users.findOne({ is_active: true }),
  findById: (id) => Users.findOne({ is_active: true, _id: id }),
  findByIdAndUpdate: (id, body) => Users.findOneAndUpdate({ _id: id, is_active: true }, body, {
    new: true,
    useFindAndModify: false,
  }),
  findByIdAndDelete: (id) => Users.findByIdAndDelete(
    { _id: id, is_active: false },
    { is_active: false },
    { useFindAndModify: false },
  ),
};
