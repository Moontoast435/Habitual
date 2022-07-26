const mongoose = require("mongoose");
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

habitSchema.statics.getUsersHabits = function (username) {
    return new Promise(async function (resolve, reject) {
        try {
            const user = await User.findByUsername(username);
            const habits = await this.find({ userID: user.id }).toArray();
            resolve(habits);
        } catch (error) {
            reject("No habits found");
        }
    });
};

habitSchema.statics.getSpecificHabit = function (username, id) {
    return new Promise(async function (resolve, reject) {
        try {
            const user = await User.findByUsername(username);
            const habit = await this.where("userID").equals(user.id).where("id").equals(id);
            resolve(habit);
        } catch (error) {
            reject("No habit found");
        }
    });
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

const habitD = [
    {
        name: "drink water",
        dates: [
            {
                complete: true,
            },
        ],
        frequency: {
            daily: true,
            weekly: false,
        },
        userID: 1,
    },
];

Habit.insertMany(habitD)
    .then((value) => {
        console.log("Saved Successfully", value);
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = Habit;
