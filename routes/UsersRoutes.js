const express = require('express');
const { userValidator, errorOne } = require('../validators');

const router = express.Router();
const { UsersController } = require('../controllers');

router.post('/users', [userValidator.createUser, errorOne], UsersController.createUser);
router.get('/users', UsersController.getUsers);
router.get('/users/:id', UsersController.getUserById);
router.patch('/users/:id', UsersController.updateUserById);
router.delete('/users/:id', UsersController.getUserById);



module.exports = router;
