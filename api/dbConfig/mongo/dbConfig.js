const mongoose = require("mongoose");
const dbUrl = process.env.DB_CONNECTION;

mongoose.connect(dbUrl);

const db = new mongoose.Mongoose();

module.exports = db;
