const express = require('express');

const router = express.Router();
const { UsersController } = require('../controllers');

router.post('/users', UsersController.createUser);
router.get('/users', UsersController.getUsers);
router.get('/users/:id', UsersController.getUserById);
router.patch('/users/:id', UsersController.updateUserById);
router.delete('/users/:id', UsersController.deleteUserById);

module.exports = router;
