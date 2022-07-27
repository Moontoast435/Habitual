const User = require('../models/User'); 
const Habit = require('../models/Habit');   //will need to match file name

async function showAllHabits (req, res) {   // index route - show all habits belonging to a user - will need Auth 
    try {
        //assuming get habits method will take in username/email/id as a param?
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body
        const habits = await Habit.getUsersHabits(user.id) // method name will need to change; using id for now will change as necessary
        res.status(200).json(habits);
    } catch (err) {
        res.status(404).json({err});
    }
}

async function showHabit (req, res) {    // show route - returns a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
    try {
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const userId = user.id;
        // const habitName = req.params.name
        const habit = await Habit.getSpecificHabit(userId, req.params.name.replaceAll('%', ' ')); //may need to be req.params.habitId
        res.status(200).json(habit);
    } catch (err) {
        res.status(404).json({err});
    }
}

async function addNewHabit (req, res) {  // create route - adds a new habit a user wants to track 
    try {
        const user = await User.findByUsername(req.params.username)
        const userId = user.id;
        const habit = await Habit.create({name: req.body.habit, dates: req.body.dates, frequency: req.body.frequency, userID: userId})// need to change these depending on params in stefans create method in habit model
        res.status(201).json(habit);
        console.log(habit._id)
    } catch (err) {
        res.status(422).json({err});
    }
}

async function deleteHabit (req, res) {  // destroy route - deletes a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
    try {
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const userId = user.id;
        const habitName = req.params.name
        const habit = await Habit.getSpecificHabit(userId, habitName.replaceAll('%', ' ')); // may need to change to req.params.habitId
        const resp = Habit.destroy(habit);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    }
}

module.exports = { showAllHabits, showHabit, addNewHabit, deleteHabit };