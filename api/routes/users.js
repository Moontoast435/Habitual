const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.showAllUsers)

router.get('/:email', usersController.showUser)

router.delete('/:email', usersController.deleteUser)