"use strict"
let API_URL2 = `https://team-1-the-slackerz-habitual.herokuapp.com`;
let username = localStorage.getItem("username");

async function getAllHabits() {
    try {
        const options = {
            headers: new Headers({ Authorization: localStorage.getItem("token") }),
        };
        const response = await fetch(`${API_URL2}/habits/${username}`, options);
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
    //let habitName = document.getElementById("habitName").value;
    let customName = document.getElementById("customTitle").value;
    let changedHabitName = customName.replaceAll(" ", "-");
    /*if (habitName === "Habit Title:") {
    changedHabitName = customName.replaceAll(" ", "-");
  } else {
    changedHabitName = habitName.replaceAll(" ", "-");
  }*/
    let dailyOrWeekly = document.getElementById("frequency-select");
    let value = dailyOrWeekly.options[dailyOrWeekly.selectedIndex].text;
    console.log(value);
    let daily;
    let weekly;
    let date;
    if (value === "Daily") {
        daily = true;
        weekly = false;
        const currentDate = new Date();
        currentDate.toLocaleDateString();
        date = currentDate.toString().slice(0, 10);
        console.log(date);
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
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                habit: customName,
                frequency: { daily, weekly },
                dates: [{ date }],
            }),
        };

        const response = await fetch(`${API_URL2}/habits/${username}/new`, options);
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
        await fetch(`${API_URL2}/habits/${username}/${id}`, options);
        window.location.reload();
    } catch (err) {
        console.warn(err);
    }
}
/*
async function getTrackingInfo(id) {
  try {
    const response = await fetch(`${API_URL2}/habits/${username}/${id}`);
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
            headers: { "Content-Type": "application/json", Authorization: localStorage.getItem("token") },
            body: JSON.stringify({ date, complete: false }),
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

async function completeHabit(objectId, date, completeValue) {
    const username = localStorage.getItem("username");
    try {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                date,
                complete: completeValue,
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

const logoutBtn = document.querySelector(".header-user");
logoutBtn.addEventListener("click", () => {
    logout();
});
