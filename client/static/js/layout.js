// Placeholder id's have been used, will be changed to reflect the actual HTML element ID's
const createMenuBtn = document.getElementById("createMenuBtn");
const createMenu = document.getElementById("createMenu");

/* const greetingBox = document.getElementById("greeting");
const greetingMessage = document.createElement("h2"); */

const createHabitForm = document.getElementById("createHabitForm");

createHabitForm.addEventListener("submit", (e) => {
  createHabit(e);
  window.location.reload();
});

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

    const startOfWeekBox = document.createElement("div");
    startOfWeekBox.classList = "start-week-box";
    startOfWeekBox.id = `startWeek + ${id}`;
    let startOfWeekInfo = document.createElement("p");
    startOfWeekInfo.classList = "start-week-info";
    startOfWeekBox.appendChild(startOfWeekInfo);
    habitBody.appendChild(startOfWeekBox);
    startOfWeekBox.style.display = "none";

    const endOfWeekBox = document.createElement("div");
    endOfWeekBox.classList = "end-week-box";
    endOfWeekBox.id = `endWeek + ${id}`;
    let endOfWeekInfo = document.createElement("p");
    endOfWeekInfo.classList = "end-week-info";
    endOfWeekBox.appendChild(endOfWeekInfo);
    habitBody.appendChild(endOfWeekBox);
    endOfWeekBox.style.display = "none";

    let numberOfWeeks = 1;

    if (frequency.weekly === true) {
      let currentDate = new Date();

      const startOfTheWeek = new Date();
      startOfTheWeek.setDate(startOfTheWeek.getDate() - currentDate + 1);
      startOfTheWeek.toLocaleDateString();
      let shortStartOfWeek = startOfTheWeek.toString().slice(0, 10);
      startOfWeekBox.style.display = "block";
      startOfWeekInfo.textContent = shortStartOfWeek;

      sendCurrentDate(name, shortStartOfWeek);

      const endOfWeek = new Date();
      endOfWeek.setDate(endOfWeek.getDate() - currentDate + 1);
      endOfWeek.setDate(endOfWeek.getDate() + numberOfWeeks * 6);
      endOfWeek.toLocaleDateString();
      let shortEndOfWeek = endOfWeek.toString().slice(0, 10);
      endOfWeekBox.style.display = "block";
      endOfWeekInfo.textContent = shortEndOfWeek;

      const mon = document.createElement("button");
      mon.classList = "habit-complete-day-button";
      mon.id = `mon + ${id}`;

      const tue = document.createElement("button");
      tue.classList = "habit-complete-day-button";
      tue.id = `tue + ${id}`;

      const wed = document.createElement("button");
      wed.classList = "habit-complete-day-button";
      wed.id = `wed + ${id}`;

      const thu = document.createElement("button");
      thu.classList = "habit-complete-day-button";
      thu.id = `thu + ${id}`;

      const fri = document.createElement("button");
      fri.classList = "habit-complete-day-button";
      fri.id = `fri + ${id}`;

      const sat = document.createElement("button");
      sat.classList = "habit-complete-day-button";
      sat.id = `sat + ${id}`;

      const sun = document.createElement("button");
      sun.classList = "habit-complete-day-button";
      sun.id = `sun + ${id}`;

      const habitTrackerButtons = document.getElementsByClassName(
        "habit-complete-day-button"
      );

      let weekComplete = document.createElement("button");
      weekComplete.classList = "week-complete-button";

      weekComplete.addEventListener("click", () => {
        updateWeeklyTracking(name, numberOfWeeks);
      });

      Array.from(habitTrackerButtons).forEach((button) => {
        button.addEventListener("click", () => {
          button.style.backgroundColor = "purple";
          updateDaysOfTheWeek(name, button.id);
          button.disabled = true;
        });
      });

      habitFooter.appendChild(mon);
      habitFooter.appendChild(tue);
      habitFooter.appendChild(wed);
      habitFooter.appendChild(thu);
      habitFooter.appendChild(fri);
      habitFooter.appendChild(sat);
      habitFooter.appendChild(sun);
    } else if (frequency.daily === true) {
      let currentDate = new Date();
      currentDate.toLocaleDateString();
      currentDate.toString().slice(0, 10);

      let dailyCompleteButton = document.createElement("button");
      dailyCompleteButton.textContent = currentDate;
      dailyCompleteButton.addEventListener("click", () => {
        updateDailyTracking(name, currentDate);
        currentDate = new Date();
      });

      habitFooter.appendChild(dailyCompleteButton);
    } else {
      return;
    }
    habitContainer.appendChild(habitHeader);
    habitContainer.appendChild(habitBody);
    habitContainer.appendChild(habitFooter);

    habitCollection.appendChild(habitContainer);
  }
}
displayAllHabits();
