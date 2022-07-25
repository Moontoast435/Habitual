const db = require("../dbConfig/mongo/dbConfig");

const habitSchema = new db.Schema({
    name: String,
    userID: Number,
    frequency: String,
    date: {
        now: new Date(),
    }
});

const Habit = db.model("Habit", habitSchema);

Habit.
