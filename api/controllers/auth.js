require('dotenv').config();

const bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken");

const User = require('../models/user'); // will need to match file name



async function register (req, res) {   // creating/registering a new user - will need to add Auth functionality
    try {
        const salt = await bcrypt.genSalt();
        const hashedPw = await bcrypt.hash(req.body.password, salt)
        const user = await User.create({...req.body, password: hashedPw});   //need to change these fields to match stefans models & the params he sets for his create method
        res.status(201).json({msg: `This user: ${user.username} was successfully created`});
    } catch (err) {
        res.status(422).json({err})
    }
}

async function login (req, res) {   //logging in - will need to add Auth
    try {
        const user = await User.findByUsername(req.body.username)
        if(!user) {
            throw new Error('No user with this username')
        }
        const authed = await bcrypt.compare(req.body.password, user.passwordDigest)
        if(authed) {
            const payload = { username: user.username }
            const sendToken = (err, token) => {
                if(err) {
                    throw new Error('Error when generating token')
                }
                res.status(200).json({
                    success: true,
                    token: "Bearer " + token,
                });
            }
            jwt.sign(payload, process.env.JWT_KEY, {expiresIn: 1200}, sendToken);
        } else {
            throw new Error('User could not be authenticated')
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({err});
    }
}

module.exports = { register, login };