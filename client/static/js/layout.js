// Placeholder id's have been used, will be changed to reflect the actual HTML element ID's
const createMenuBtn = document.getElementById("createMenuBtn");
const createMenu = document.getElementById("createMenu");

const greetingBox = document.getElementById("greeting");
const greetingMessage = document.createElement("h2");

/*const createHabitBtn = document
  .getElementById("createPost")
  .addEventListener("click", () => {
    createMenu.style.display = "block";
  }); */

const createHabitForm = document.getElementById("createPost");

/*createHabitForm.addEventListener("submit", (e) => {
  createHabit(e);
  window.location.reload();
}); */

const habitCollection = document.getElementById("greetingPost"); // will change depending on what id Aditi has set

function displayAllHabits() {
  //  const habits = getAllHabits();
  //  const { name, tracking, frequency, streak } = habits.habits; //not sure what datapoints will be fetched from DB yet

  const habitContainer = document.createElement("div");
  habitContainer.classList = "habit-container";

  const habitHeader = document.createElement("div");
  habitHeader.classList = "habit-header";
  const habitBody = document.createElement("div");
  habitBody.classList = "habit-body";
  const habitFooter = document.createElement("div");
  habitFooter.classList = "habit-footer";

  const habitName = document.createElement("p");
  habitName.classList = "habit-name";
  habitName.textContent = "Row my boat gently down the stream";
  habitHeader.appendChild(habitName);

  const habitInfo = document.createElement("p");
  const frequencyInfo = document.createElement("p");
  frequencyInfo.classList = "habit-information";
  habitInfo.classList = "habit-information";
  habitInfo.textContent = "tracking info";
  frequencyInfo.textContent = `This should be completed weekly`;
  habitBody.appendChild(habitInfo);
  habitBody.appendChild(frequencyInfo);

  const streakInfo = document.createElement("p");
  streakInfo.classList = "streak-information";
  streakInfo.textContent = "3";
  habitFooter.appendChild(streakInfo);
  // if (dailyOrWeekly === "daily") {
  // id of the habit will be used in place of 1 when the data is fetched successfully.
  const mon = document.createElement("button");
  mon.classList = "habit-complete-button";
  mon.id = `1`;

  const tue = document.createElement("button");
  tue.classList = "habit-complete-button";
  tue.id = `1`;

  const wed = document.createElement("button");
  wed.classList = "habit-complete-button";
  wed.id = `1`;

  const thu = document.createElement("button");
  thu.classList = "habit-complete-button";
  thu.id = `1`;

  const fri = document.createElement("button");
  fri.classList = "habit-complete-button";
  fri.id = `1`;

  const sat = document.createElement("button");
  sat.classList = "habit-complete-button";
  sat.id = `1`;

  const sun = document.createElement("button");
  sun.classList = "habit-complete-button";
  sun.id = `1`;

  habitFooter.appendChild(mon);
  habitFooter.appendChild(tue);
  habitFooter.appendChild(wed);
  habitFooter.appendChild(thu);
  habitFooter.appendChild(fri);
  habitFooter.appendChild(sat);
  habitFooter.appendChild(sun);
  // }
  habitContainer.appendChild(habitHeader);
  habitContainer.appendChild(habitBody);
  habitContainer.appendChild(habitFooter);

  habitCollection.appendChild(habitContainer);
}

displayAllHabits();

// Javascript for the tracking information buttons

const trackerButtons = document.getElementsByClassName("habit-complete-button");

let currentDate = new Date();

Array.from(trackerButtons).forEach((b) => {
  b.addEventListener("click", () => {
    data = getTrackingInfo(b.id);
    let currentDate = new Date();
    if (currentDate != data.trackingSchema.dates.date) {
    }
  });
});
