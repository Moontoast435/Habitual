const mongoose = require("mongoose");
const connection = require("../dbConfig/mongo/connection");

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
      complete: false,
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

const Habit = mongoose.model("Habit", habitSchema);

habitSchema.statics.getUsersHabits = function (userID) {
  return new Promise(async function (resolve, reject) {
    try {
      const habits = await Habit.find({ userID: userID });
      resolve(habits);
    } catch (error) {
      console.log(error);
      reject("No habits found");
    }
  });
};

habitSchema.statics.getSpecificHabit = function (userID, habitName) {
  return new Promise(async function (resolve, reject) {
    try {
      const habit = await Habit.where("userID")
        .equals(userID)
        .where("name")
        .equals(habitName);
      resolve(habit);
    } catch (error) {
      reject("No habit found");
    }
  });
};

habitSchema.statics.destroy = function (habitData) {
  return new Promise(async function (resolve, reject) {
    try {
      const habit = await Habit.deleteOne({ ...habitData });
      resolve(habit);
    } catch (error) {
      reject("No habit found");
    }
  });
};

habitSchema.statics.findByName = function (name) {
  return new Promise(async function (resolve, reject) {
    try {
      const habit = await Habit.findOne({ name: name });
      resolve(habit);
    } catch (error) {
      reject("Habit not found");
    }
  });
};

module.exports = Habit;
