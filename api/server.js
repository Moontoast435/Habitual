const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME,
    })
    .then(() => {
        console.log("Connected to the Database.");
    })
    .catch((err) => console.error(err));

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const habitRoutes = require("./routes/habits");

server.use("/", authRoutes);
server.use("/users", userRoutes);
server.use("/habits", habitRoutes);

server.get("/", (req, res) => res.send("Welcome to Habitual: The Habit Tracker"));

module.exports = server;
