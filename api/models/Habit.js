const db = require("../dbConfig/mongo/dbConfig");

const trackingSchema = new db.Schema({
    frequency: {
        daily: {
            day: () => {
                const now = new Date();
                const options = {
                    weekday: "long",
                };

                return new Intl.DateTimeFormat("en-GB", options).format(now);
            },
            status: String,
        },
        weekly: [
            {
                days: [
                    { mon: Boolean },
                    { tue: Boolean },
                    { wed: Boolean },
                    { thu: Boolean },
                    { fri: Boolean },
                    { sat: Boolean },
                    { sun: Boolean },
                ],
                status: String,
            },
        ],
    },
});

const habitSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: Boolean,
    tracking: trackingSchema,
    userID: Number,
});

habitSchema.statics.findByName = function (name) {
    return new Promise(async (resolve, reject) => {
        try {
            const habit = this.findOne({ name: name });
            resolve(habit);
        } catch (error) {
            reject("Habit not found");
        }
    });
};

const Habit = db.model("Habit", habitSchema);

module.exports = Habit;
