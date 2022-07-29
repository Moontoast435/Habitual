const mongoose = require("mongoose");
const connection = require("../dbConfig/mongo/connection")
const User = require("./User");

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dates: [
        {
            day: {
                type: String,
                default: () => {
                    const now = new Date();
                    const options = {
                        weekday: "long",
                    };

                    return new Intl.DateTimeFormat("en-GB", options).format(now);
                },
            },
            date: {
                type: String,
                default: () => {
                    const now = new Date();
                    const options = {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                    };

                    return new Intl.DateTimeFormat("en-GB", options).format(now);
                },
            },
            complete: Boolean,
        },
    ],
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

<<<<<<< HEAD
habitSchema.statics.getUsersHabits = function (userID) {
=======
habitSchema.statics.getUsersHabits = function (username) {
>>>>>>> main
    return new Promise(async function (resolve, reject) {
        try {
            const user = await User.findByUsername(username);
            const habits = await this.find({ userID: user.id }).toArray();
            resolve(habits);
<<<<<<< HEAD
        } catch (err) {
            console.log(err);
=======
        } catch (error) {
>>>>>>> main
            reject("No habits found");
        };
    });
}

<<<<<<< HEAD
habitSchema.statics.getSpecificHabit = function (objectId) {
    return new Promise(async function (resolve, reject) {
        try {
            const habitData = await Habit.find({_id: objectId});
            const habit = new Habit(habitData[0]);
=======
habitSchema.statics.getSpecificHabit = function (username, id) {
    return new Promise(async function (resolve, reject) {
        try {
            const user = await User.findByUsername(username);
            const habit = await this.where("userID").equals(user.id).where("id").equals(id);
>>>>>>> main
            resolve(habit);
        } catch (error) {
            console.log(error);
            reject("Sorry! No habit found!");
        }
    })
};    

habitSchema.statics.destroy = function (habitData) {
    return new Promise(async function (resolve, reject) {
        try {
            const habit = await this.deleteOne({ ...habitData });
            resolve(habit);
        } catch (error) {
            reject("No habit found");
        }
    });
};

habitSchema.statics.findByName = function (name) {
    return new Promise(async function (resolve, reject) {
        try {
            const habit = await this.findOne({ name: name });
            resolve(habit);
        } catch (error) {
            reject("Habit not found");
        }
    });
};

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
