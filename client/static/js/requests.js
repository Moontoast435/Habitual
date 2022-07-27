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
  let changedHabitName = habitName.replaceAll(" ", "%");
  let dailyOrWeekly = document.getElementById("frequency").value;
  let daily;
  let weekly;
  if (dailyOrWeekly === "daily") {
    daily = true;
    weekly = false;
  } else {
    weekly = true;
    daily = false;
  }
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        habit: changedHabitName,
        frequency: { daily, weekly },
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

async function getTrackingInfo(id) {
  try {
    const response = await fetch(`${API_URL}/username/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}
// to do
async function updateTrackingInformation() {
  try {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    };
  } catch {}
}
