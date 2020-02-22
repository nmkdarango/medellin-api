const { Users } = require('../models');

module.exports = {
  createUser: (req, res) => {
    const {
      // eslint-disable-next-line camelcase
      first_name,
      // eslint-disable-next-line camelcase
      last_name,
      email,
    } = req.body;

    const document = {
      first_name,
      last_name,
      email,
    };

    Users.create(document)
      .then((user) => res.status(201).json({ message: 'User created!', data: user }))
      .catch((err) => res.status(400).json({ message: 'Error creating user', data: err }));
  },
  getUsers: (_, res) => {
    Users.find()
      .then((users) => res.status(200).json({ message: 'Users obtained!', data: users }))
      .catch((err) => res.status(404).json({ message: 'Error getting users', data: err }));
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    Users.findById(id)
      .then((user) => res.status(200).json({ message: 'User obtained!', data: user }))
      .catch((err) => res.status(404).json({ message: 'Error getting user', data: err }));
  },
  updateUserById: (req, res) => {
    const { id } = req.params;
    Users.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
      .then((updatedUser) => res.status(200).json({ message: 'User updated!', data: updatedUser }))
      .catch((err) => res.status(404).json({ message: 'Error updating user', data: err }));
  },
  deleteUserById: (req, res) => {
    const { id } = req.params;
    Users.findByIdAndUpdate(id, { is_active: false }, { useFindAndModify: false })
      .then(() => res.status(204).json())
      .catch((err) => res.status(404).json({ message: 'Error deleting user', data: err }));
  },
};
