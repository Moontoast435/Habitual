const myDate = new Date();
//const nextDayOfMonth = myDate.getDate() + 20;
//myDate.setDate(nextDayOfMonth);
//const newDate = myDate.toLocaleString();
console.log(myDate);
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
  const habits = getAllHabits();
  for (let i = 0; i < habits.length; i++) {
    const { name, frequency } = habits[i];
    let id = i;
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
    habitName.textContent = name;
    habitHeader.appendChild(habitName);

    const habitInfo = document.createElement("p");
    const frequencyInfo = document.createElement("p");
    frequencyInfo.classList = "habit-information";
    habitInfo.classList = "habit-information";
    habitInfo.textContent = "tracking info";
    frequencyInfo.textContent = frequency;
    habitBody.appendChild(habitInfo);
    habitBody.appendChild(frequencyInfo);

    const streakInfo = document.createElement("p");
    streakInfo.classList = "streak-information";
    streakInfo.textContent = "3";
    habitFooter.appendChild(streakInfo);
    // if (frequency.daily === true) {

    const mon = document.createElement("button");
    mon.classList = "habit-complete-button";
    mon.id = `${id}`;

    const tue = document.createElement("button");
    tue.classList = "habit-complete-button";
    tue.id = `${id}`;

    const wed = document.createElement("button");
    wed.classList = "habit-complete-button";
    wed.id = `${id}`;

    const thu = document.createElement("button");
    thu.classList = "habit-complete-button";
    thu.id = `${id}`;

    const fri = document.createElement("button");
    fri.classList = "habit-complete-button";
    fri.id = `${id}`;

    const sat = document.createElement("button");
    sat.classList = "habit-complete-button";
    sat.id = `${id}`;

    const sun = document.createElement("button");
    sun.classList = "habit-complete-button";
    sun.id = `${id}`;

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
}

displayAllHabits();
