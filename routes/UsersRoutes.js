const express = require('express');

const router = express.Router();
const { UsersValidator } = require('../validators');
const { UsersController } = require('../controllers');

router.post('/users', [UsersValidator.UserCreateValidator], UsersController.createUser);
router.get('/users', UsersController.getUsers);
router.get('/users/:id', UsersController.getUserById);
router.patch('/users/:id', UsersController.updateUserById);
router.delete('/users/:id', UsersController.deleteUserById);

module.exports = router;
