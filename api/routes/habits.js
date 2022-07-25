const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')

router.get('/:username', habitsController.showAllHabits)

router.get('/:username/:id', habitsController.showHabit)

router.post('/:username/new', habitsController.addNewHabit)

router.delete('/:username/:id', habitsController.deleteHabit)

