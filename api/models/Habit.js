const db = require("../dbConfig/mongo/dbConfig");
const User = require("./User");

const trackingSchema = new db.Schema({
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
});

const habitSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    tracking: trackingSchema,
    frequency: {
        daly: Boolean,
        weekly: Boolean,
    },
    createdAt: {
        type: Date,
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

const Habit = db.model("Habit", habitSchema);

module.exports = Habit;
