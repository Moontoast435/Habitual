const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')
const habitsController = require('../controllers/habits')

router.get('/:username', verifyToken, habitsController.showAllHabits)

<<<<<<< HEAD
router.get('/:username/:objectId', verifyToken, habitsController.showHabit)

router.patch('/:username/:objectId', verifyToken, habitsController.updateHabit)

router.patch('/:username/:objectId/complete', verifyToken, habitsController.completeHabit)

router.post('/:username/new', verifyToken, habitsController.addNewHabit)

router.delete('/:username/:objectId', verifyToken, habitsController.deleteHabit)
=======
router.get('/:username/:id', verifyToken, habitsController.showHabit)

router.post('/:username/new', verifyToken, habitsController.addNewHabit)

router.delete('/:username/:id', verifyToken, habitsController.deleteHabit)
>>>>>>> main

module.exports = router;

