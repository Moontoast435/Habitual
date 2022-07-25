const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')
const usersController = require('../controllers/users');

router.get('/:username', verifyToken, usersController.showUser)

router.delete('/:username', verifyToken, usersController.deleteUser)

module.exports = router;