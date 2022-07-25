const User = require('../models/user'); // will need to match file name
const Habit = require('../models/habit');   //will need to match file name

async function showAllHabits (req, res) {   // index route - show all habits belonging to a user - will need Auth 
    try {
        //assuming get habits method will take in username/email/id as a param?
        const user = User.findByEmail(req.body.email); // will change this depending whats being sent in the request body
        const habits = Habit.getUsersHabits(user.id) // method name will need to change; using id for now will change as necessary
        res.status(200).json(habits);
    } catch (err) {
        res.status(404).json({err});
    }
}

async function showHabit (req, res) {    // show route - returns a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
    try {
        const user = User.findByEmail(req.body.email); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const habit = Habit.getSpecificHabit(user.id, req.body.habitId);
        res.status(200).json(habit);
    } catch (err) {
        res.status(404).json({err});
    }
}

async function addNewHabit (req, res) {  // create route - adds a new habit a user wants to track 
    try {
        const habit = await Habit.create(req.body.name, req.body.habit)// need to change these depending on params in stefans create method in habit model
        res.status(201).json(habit);
    } catch (err) {
        res.status(422).json({err});
    }
}

async function deleteHabit (req, res) {  // destroy route - deletes a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
    try {
        const user = User.findByEmail(req.body.email); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const habit = Habit.getSpecificHabit(user.id, req.body.habitId);
        const resp = habit.destroy(); //confirm method name
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    }
}

module.exports = { showAllHabits, showHabit, addNewHabit, deleteHabit };