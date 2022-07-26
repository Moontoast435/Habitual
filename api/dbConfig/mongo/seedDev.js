const Habit = require("../../models/Habit");

const habit1 = [
    {
        name: "eat breakfast",
        dates: [
            {
                complete: false,
            },
        ],
        frequency: {
            daily: false,
            weekly: true,
        },
        userID: 1,
    },
];

const habit2 = [
    {
        name: "eat breakfast",
        dates: [
            {
                complete: false,
            },
        ],
        frequency: {
            daily: false,
            weekly: true,
        },
        userID: 2,
    },
];

Habit.insertMany(habit1, habit2)
    .then((value) => {
        console.log("Saved Successfully", value);
    })
    .catch((error) => {
        console.log(error);
    });
