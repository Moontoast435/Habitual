const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')
const habitsController = require('../controllers/habits')

router.get('/:username', verifyToken, habitsController.showAllHabits)

router.get('/:username/:name', verifyToken, habitsController.showHabit)

router.post('/:username/new', verifyToken, habitsController.addNewHabit)

router.delete('/:username/:name', verifyToken, habitsController.deleteHabit)

module.exports = router;

