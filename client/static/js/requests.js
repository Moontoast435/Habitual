let API_URL = `http://localhost:3000`;

async function getAllHabits() {
  try {
    const response = await fetch(`${API_URL}/username`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createHabit(e) {
  e.preventDefault();
  let habitName = document.getElementById("habitName").value;
  let dailyOrWeekly = document.getElementById("frequency").value;
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habit: habitName, frequency: dailyOrWeekly }),
    };

    const response = await fetch(`${API_URL}/username/new`, options);
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
    await fetch(`${API_URL}/username/${id}`, options);
    window.location.reload();
  } catch (err) {
    console.warn(err);
  }
}

async function sendLoginDetails(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new FormData(e.target)),
    };
    const response = await fetch(`${API_URL}/login`, options);
    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      return;
    }
  } catch (err) {
    console.warn(err);
  }
}

async function sendNewUserDetails(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new FormData(e.target)),
    };
    const response = await fetch(`${API_URL}/register`, options);
    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      return;
    }
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
