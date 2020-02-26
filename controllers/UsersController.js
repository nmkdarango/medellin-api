const { UsersResolver } = require('../resolvers');

module.exports = {
  createUser: (req, res) => {
    UsersResolver.create(req.body)
      .then((user) => res.status(201).json({ message: 'User created!', data: user }))
      .catch((err) => res.status(400).json({ message: 'Error creating user', data: err }));
  },
  getUsers: async (_, res) => {
    const users = await UsersResolver.find();
    if (!users) res.status(404).json({ message: 'Users not found', data: users });
    res.status(200).json({ message: 'Users obtained!', data: users });
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await UsersResolver.findById(id);
    if (!user) res.status(404).json({ message: 'User not found', data: user });
    res.status(200).json({ message: 'User obtained!', data: user });
  },
  updateUserById: async (req, res) => {
    const { id } = req.params;
    const user = await UsersResolver.findById(id);
    if (!user) res.status(404).json({ message: 'User not found', data: user });
    const updatedUser = await UsersResolver.update(user, req.body);
    if (!updatedUser) res.status(400).json({ message: 'Error updating user', data: user });
    res.status(200).json({ message: 'User updated!', data: updatedUser });
  },
  deleteUserById: (req, res) => {
    const { id } = req.params;
    UsersResolver.findByIdAndDelete(id)
      .then(() => res.status(204).json())
      .catch((err) => res.status(404).json({ message: 'Error deleting user', data: err }));
  },
};
