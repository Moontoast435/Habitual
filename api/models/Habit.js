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
    // frequency: {
    //     daily: {
    //         day: {
    //             type: String,
    //             default: () => {
    //                 const now = new Date();
    //                 const options = {
    //                     weekday: "long",
    //                 };

    //                 return new Intl.DateTimeFormat("en-GB", options).format(now);
    //             },
    //         },
    //         status: String,
    //     },
    //     weekly: [
    //         {
    //             days: [
    //                 { mon: Boolean },
    //                 { tue: Boolean },
    //                 { wed: Boolean },
    //                 { thu: Boolean },
    //                 { fri: Boolean },
    //                 { sat: Boolean },
    //                 { sun: Boolean },
    //             ],
    //             status: String,
    //         },
    //     ],
    // },
});

const habitSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    tracking: trackingSchema,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    userID: Number,
});

habitSchema.statics.getUsersHabits = function (username) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findByUsername(username);
            const habits = await this.find({ userID: user.id }).toArray();
            resolve(habits);
        } catch (error) {
            reject("No habits found");
        }
    });
};
habitSchema.statics.getUsersHabits = function (username) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findByUsername(username);
            const habits = await this.find({ userID: user.id }).toArray();
            resolve(habits);
        } catch (error) {
            reject("No habits found");
        }
    });
};

habitSchema.statics.findByName = function (name) {
    return new Promise(async (resolve, reject) => {
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
