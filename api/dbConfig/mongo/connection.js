const mongoose = require('mongoose');

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

module.exports = mongoose