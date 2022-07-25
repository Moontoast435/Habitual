const User = require('../models/user'); // will need to match file name

async function register (req, res) {   // creating/registering a new user - will need to add Auth functionality
    try {
        const user = await User.create(req.body.username, req.body.email, req.body.password);   //need to change these fields to match stefans models & the params he sets for his create method
        res.status(201).json(user);
    } catch (err) {
        res.status(422).json({err})
    }
}

async function login (req, res) {   //logging in - will need to add Auth
    try {
        res.status(201)
    } catch (err) {
        res.status(404)
    }
}

module.exports = { register, login };