let API_URL = `http://localhost:3000`;
let username = localStorage.getItem("username");

async function getAllHabits() {
  try {
    const response = await fetch(`${API_URL}/habits/${username}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createHabit(e) {
  e.preventDefault();
  let habitName = document.getElementById("habitName").value;
  let changedHabitName = habitName.replaceAll(" ", "-");
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        habit: changedHabitName,
        frequency: { daily, weekly },
        dates: [{ date }],
      }),
    };

    const response = await fetch(`${API_URL}/habits/${username}/new`, options);
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
    await fetch(`${API_URL}/habits/${username}/${id}`, options);
    window.location.reload();
  } catch (err) {
    console.warn(err);
  }
}
/*
async function getTrackingInfo(id) {
  try {
    const response = await fetch(`${API_URL}/habits/${username}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}*/

// to do
async function updateWeeklyTracking(name, week) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ week }),
    };

    const response = await fetch(
      `${API_URL}/habits/${username}/${name}`,
      options
    );

    numberOfWeeks += 1;
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

async function sendCurrentWeekDate(name, startOfTheWeek) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startOfTheWeek }),
    };

    const response = await fetch(
      `${API_URL}/habits/${username}/${name}`,
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
async function sendCurrentDate(name, currentDate, frequency) {
  try {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ frequency, currentDate, complete: false }),
    };

    const response = await fetch(
      `${API_URL}/habits/${username}/${name}`,
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

async function updateDate(objectId, date) {
  const username = localStorage.getItem("username");
  try {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, complete: false }),
    };

    const response = await fetch(
      `${API_URL}/habits/${username}/${objectId}`,
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

async function completeHabit(objectId, date) {
  const username = localStorage.getItem("username");
  try {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: true }),
    };

    const response = await fetch(
      `${API_URL}/habits/${username}/${objectId}/complete`,
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

async function compareDates() {
  let curren;
}
