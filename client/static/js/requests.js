async function getAllHabits() {
  try {
    const response = await fetch(`http://localhost:3000/habits`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createHabit(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const response = await fetch("http://localhost:3000/habits", options);
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
    await fetch(`http://localhost:3000/habits/${id}`, options);
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
    const response = await fetch(`http://localhost:3000/login`, options);
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
    const response = await fetch(`http://localhost:3000/register`, options);
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
