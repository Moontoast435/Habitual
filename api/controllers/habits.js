const User = require('../models/User'); 
const Habit = require('../models/Habit');   //will need to match file name

async function showAllHabits (req, res) {   // index route - show all habits belonging to a user - will need Auth 
    try {
        //assuming get habits method will take in username/email/id as a param?
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body
        const habits = await Habit.getUsersHabits(user.id) // method name will need to change; using id for now will change as necessary
        res.status(200).json(habits);
    } catch (err) {
<<<<<<< HEAD
        console.log(err)
        res.status(404).json({ err });
=======
        res.status(404).json({err});
>>>>>>> main
    }
}

async function showHabit (req, res) {    // show route - returns a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
    try {
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const userId = user.id;
<<<<<<< HEAD
        const objectId = req.params.objectId
        // const habit = await Habit.getSpecificHabit(userId, req.params.name.replaceAll('-', ' ')); //may need to be req.params.habitId
        const habit = await Habit.getSpecificHabit(objectId);
        res.status(200).json(habit);
    } catch (err) {
        console.log(err);
        res.status(404).json({ err });
=======
        const habit = await Habit.getSpecificHabit(userId, req.params.id); //may need to be req.params.habitId
        res.status(200).json(habit);
    } catch (err) {
        res.status(404).json({err});
>>>>>>> main
    }
}

async function addNewHabit (req, res) {  // create route - adds a new habit a user wants to track 
    try {
<<<<<<< HEAD
        console.log(req.body)
        const user = await User.findByUsername(req.params.username);
=======
        const user = await User.findByUsername(req.params.username)
>>>>>>> main
        const userId = user.id;
        const habit = await Habit.create(userId, req.body.name, req.body.frequency, req.body.tracking)// need to change these depending on params in stefans create method in habit model
        res.status(201).json(habit);
    } catch (err) {
<<<<<<< HEAD
        console.log(err)
        res.status(422).json({ err });
    }
}

async function updateHabit(req,res) {
    try{
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const userId = user.id;
        const objectId = req.params.objectId
        const habit = await Habit.getSpecificHabit(objectId);
        console.log(habit)
        const dates = req.body // i think 
        console.log(dates)
        console.log(habit.dates)
        habit.dates.push(dates)
        if(userId === habit.userID) {
           const result = await Habit.updateOne({_id: objectId}, {dates: habit.dates})
           res.status(200).end();
        } else {
            console.log('This aint your habit to update muhfucka')
            res.status(401).end();
        }
    }catch(err){
        console.log(err)
        res.status(404).json({ err });
    }
}

async function completeHabit(req, res){
    try{
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const userId = user.id;
        const objectId = req.params.objectId
        const habit = await Habit.getSpecificHabit(objectId);
        console.log(habit)
        if(userId === habit.userID) {
            const result = await Habit.updateOne({_id: objectId, "dates.date": req.body.date}, { $set: { "dates.$.complete": req.body.complete } })
            res.status(200).end();
         } else {
             console.log('This aint your habit to update muhfucka')
             res.status(401).end();
         }
        
    } catch(err){

    }
}

async function deleteHabit(req, res) {
    // destroy route - deletes a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
=======
        res.status(422).json({err});
    }
}

async function deleteHabit (req, res) {  // destroy route - deletes a specific habit belonging to a user - get user by email/username then get habit by id? - will need auth
>>>>>>> main
    try {
        const user = await User.findByUsername(req.params.username); // will change this depending whats being sent in the request body - get user via auth maybe?
        //currently assuming finding specific habit method will take params of a users id/email/username and then also a habit id?
        const userId = user.id;
<<<<<<< HEAD
        const objectId = req.params.objectId
        const habit = await Habit.getSpecificHabit(objectId);
        if(userId === habit.userID) {
            const resp = await Habit.deleteOne({ _id: objectId })
            .then(function(){
                console.log('Its deleted thank God')
            })
            .catch(function(err){
                console.log(err)
            });
            res.status(204).end();
        } else {
            console.log('This aint your habit muhfucka')
        }
        // const habit = await Habit.getSpecificHabit(userId, habitName.replaceAll("-", " ")); // may need to change to req.params.habitId
        // console.log(habit)
        
    } catch (err) {
        console.log(err)
        res.status(404).json({ err });
    }
}

module.exports = { showAllHabits, showHabit, addNewHabit, deleteHabit, updateHabit, completeHabit };
=======
        const habit = await Habit.getSpecificHabit(userId, req.params.id); // may need to change to req.params.habitId
        const resp = habit.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    }
}

module.exports = { showAllHabits, showHabit, addNewHabit, deleteHabit };
>>>>>>> main
