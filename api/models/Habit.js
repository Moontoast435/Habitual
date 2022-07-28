const mongoose = require("mongoose");
const connection = require("../dbConfig/mongo/connection");

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dates: [],
    frequency: {
        daily: Boolean,
        weekly: Boolean,
    },
    createdAt: {
        type: String,
        default: new Date(),
    },
    userID: Number,
});

habitSchema.statics.getUsersHabits = async function (userID) {
    return new Promise(async function (resolve, reject) {
        try {
            const habitsData = await Habit.find({ userID: userID });
            const habits = habitsData.map((habit) => new Habit(habit));
            resolve(habits);
        } catch (error) {
            console.log(error);
            reject("No habits found");
        }
    });
};

habitSchema.statics.getSpecificHabit = async function (userID, objectId) {
    return new Promise(async function (resolve, reject) {
        try {
            const habitData = await Habit.find({ _id: objectId });
            const habit = new Habit(habitData[0]);
            resolve(habit);
        } catch (error) {
            reject("No habit found");
        }
    });
};

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
