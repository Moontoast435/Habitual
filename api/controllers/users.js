const User = require('../models/User'); // will need to match file name

async function showAllUsers (req, res) {   // index route - show all users - might not need this route? 
    try {
        const users = await User.all;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({err});
    }
}

async function showUser (req, res) {    // show route - get user by id/email/username - will show a users details - will a user be able to see their habits here too?
    try {
        const user = await User.findByUsername(req.params.username);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({err});
    }
}


async function deleteUser (req, res) {  // destroy route - deleting a user - will need to add Auth functionality also i think
    try {
        const user = await User.findByUsername(req.params.username) 
        const resp = user.destroy(); 
        res.status(204).json({msg: `This user has now been deleted: ${user.username}. Bye bye!👋`});
    } catch (err) {
        res.status(404).json({err});
    }
}

module.exports = { showAllUsers, showUser, deleteUser };