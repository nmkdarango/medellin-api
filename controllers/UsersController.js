const { Users } = require('../models');

module.exports = {
  createUser: (req, res) => {
    const {
      // eslint-disable-next-line camelcase
      firstname,
      // eslint-disable-next-line camelcase
      lastname,
      email,
      password,
    } = req.body;

    const document = {
      firstname,
      lastname,
      email,
      password,
    };

    Users.create(document)
      .then((user) => res.status(201).json({ message: 'User created!', data: user }))
      .catch((err) => res.status(400).json({ message: 'Error creating user', data: err }));
  },
  getUsers: async (_, res) => {
    const users = await Users.find({ is_active: true });
    if (!users) res.status(404).json({ message: 'Users not found', data: users });
    res.status(200).json({ message: 'Users obtained!', data: users });
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id, is_active: true });
    if (!user) res.status(404).json({ message: 'User not found', data: user });
    res.status(200).json({ message: 'User obtained!', data: user });
  },
  updateUserById: (req, res) => {
    const { id } = req.params;
    Users.findOneAndUpdate({ _id: id, is_active: true }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((updatedUser) => res.status(200).json({ message: 'User updated!', data: updatedUser }))
      .catch((err) => res.status(404).json({ message: 'Error updating user', data: err }));
  },
  deleteUserById: (req, res) => {
    const { id } = req.params;
    Users.findOneAndUpdate({ _id: id, is_active: false }, { useFindAndModify: false })
      .then(() => res.status(204).json())
      .catch((err) => res.status(404).json({ message: 'Error deleting user', data: err }));
  },
};
