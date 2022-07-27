const Habit = require("../../models/Habit");
const seedData = require("./dev_seeds.json");

Habit.insertMany(seedData)
    .then((value) => {
        console.log("Saved Successfully", value);
    })
    .then(() => {
        console.log("Dev MongoDB database seeded");
        process.exit();
    })
    .catch((error) => {
        console.log(error);
    });
