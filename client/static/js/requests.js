async function getAllHabits() {
  try {
    const response = await fetch(`http://localhost:3000/habits`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createHabit() {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const response = await fetch("http://localhost:3000/books", options);
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
