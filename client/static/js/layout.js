// Placeholder id's have been used, will be changed to reflect the actual HTML element ID's

const createMenuBtn = document.getElementById("createMenuBtn");
const createMenu = document.getElementById("createMenu");

const greetingBox = document.getElementById("greeting");
const greetingMessage = document.createElement("h2");

const createHabitBtn = document
  .getElementById("createHabitBtn")
  .addEventListener("click", () => {
    createMenu.style.display = "block";
  });

const createHabitForm = document.getElementById("createPost");

createHabitForm.addEventListener("submit", (e) => {
  createHabit(e);
  window.location.reload();
});

const habitCollection = document.getElementById("habit-collection"); // will change depending on what id Aditi has set

function displayAllHabits() {
  const habits = getAllHabits();
  const { name, info, frequency, streak } = habits; //not sure what datapoints will be fetched from DB yet

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
  habitInfo.textContent = info;
  frequencyInfo.textContent = `This should be completed ${frequency}`;
  habitBody.appendChild(habitInfo);
  habitBody.appendChild(frequencyInfo);

  const streakInfo = document.createElement("p");
  streakInfo.classList = "streak-information";
  streakInfo.textContent = streak;
  habitFooter.appendChild(streakInfo);

  const checkBox = document.createElement("input");
  checkBox.classList = "";
  checkBox.setAttribute = ("type", "radio");
  habitFooter.appendChild(checkBox);

  habitContainer.appendChild(habitHeader);
  habitContainer.appendChild(habitBody);
  habitContainer.appendChild(habitFooter);
  habitContainer.appendChild(habitHeader);

  habitCollection.appendChild(habitContainer);
}

displayAllHabits();
