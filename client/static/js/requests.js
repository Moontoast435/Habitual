<<<<<<< HEAD
"use strict"
let API_URL2 = `http://localhost:3000`;
let username = localStorage.getItem("username");

async function getAllHabits() {
  try {
    const options = {
      headers: new Headers({ Authorization: localStorage.getItem("token") }),
    };
    const response = await fetch(`${API_URL2}/habits/${username}`, options);
=======
let API_URL = `http://localhost:3000`;

async function getAllHabits() {
  try {
    const response = await fetch(`${API_URL}/username`);
>>>>>>> main
    const data = await response.json();
    if (data.err) {
      console.warn(data.err);
      logout();
    }
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createHabit() {
  let habitName = document.getElementById("habitName").value;
<<<<<<< HEAD
  let customName = document.getElementById("customTitle").value;
  let changedHabitName;
  if (habitName === "Habit Title:") {
    changedHabitName = customName.replaceAll(" ", "-");
  } else {
    changedHabitName = habitName.replaceAll(" ", "-");
  }
  let dailyOrWeekly = document.getElementById("frequency").value;
  let daily;
  let weekly;
  let date;
  if (dailyOrWeekly === "daily") {
    daily = true;
    weekly = false;
    date = new Date();
    date.toLocaleDateString();
    date.toString().slice(0, 10);
  } else {
    let currentDate = new Date();
    weekly = true;
    daily = false;
    const startOfTheWeek = new Date();
    startOfTheWeek.setDate(startOfTheWeek.getDate() - currentDate.getDay() + 1);
    startOfTheWeek.toLocaleDateString();
    let shortStartOfWeek = startOfTheWeek.toString().slice(0, 10);

    const endOfWeek = new Date();
    endOfWeek.setDate(endOfWeek.getDate() - currentDate.getDay() + 7);
    endOfWeek.toLocaleDateString();
    let shortEndOfWeek = endOfWeek.toString().slice(0, 10);

    date = `${shortStartOfWeek} - ${shortEndOfWeek}`;
  }
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       "Authorization": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        habit: changedHabitName,
        frequency: { daily, weekly },
        dates: [{ date }],
      }),
    };

    const response = await fetch(`${API_URL2}/habits/${username}/new`, options);
=======
  let dailyOrWeekly = document.getElementById("frequency").value;
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habit: habitName, frequency: dailyOrWeekly }),
    };

    const response = await fetch(`${API_URL}/username/new`, options);
>>>>>>> main
    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.reload();
    }
  } catch (err) {
    console.warn(err);
  }
}

async function deleteHabit(id) {
  try {
    const options = { method: "DELETE" };
<<<<<<< HEAD
    await fetch(`${API_URL2}/habits/${username}/${id}`, options);
=======
    await fetch(`${API_URL}/username/${id}`, options);
>>>>>>> main
    window.location.reload();
  } catch (err) {
    console.warn(err);
  }
}
/*
async function getTrackingInfo(id) {
  try {
<<<<<<< HEAD
    const response = await fetch(`${API_URL2}/habits/${username}/${id}`);
=======
    const response = await fetch(`${API_URL}/username/${id}`);
>>>>>>> main
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}*/

// to do
async function updateDate(objectId, date) {
  const username = localStorage.getItem("username");
  try {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json","Authorization": localStorage.getItem("token") },
      body: JSON.stringify({ date, complete: false }),
    };

    const response = await fetch(
      `${API_URL2}/habits/${username}/${objectId}`,
      options
    );

    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.reload();
    }
  } catch (err) {
    console.warn(err);
  }
}

async function completeHabit(objectId, date, completeValue) {
  const username = localStorage.getItem("username");
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
       "Authorization": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        date, complete: completeValue
      }),
    };

    const response = await fetch(`${API_URL2}/habits/${username}/${objectId}/complete`, options);
    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.reload();
    }
  } catch (err) {
    console.warn(err);
  }
}
