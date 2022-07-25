const express = require('express');
const cors = require('cors');


const server = express();
server.use(cors());
server.use(express.json());

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const habitRoutes = require('./routes/habits')

server.use('/', authRoutes)
server.use('/users', userRoutes)

server.get('/', (req,res) => res.send('Welcome to Habitual: The Habit Tracker'))



module.exports = server;