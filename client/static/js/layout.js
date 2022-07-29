// Placeholder id's have been used, will be changed to reflect the actual HTML element ID's

/* const greetingBox = document.getElementById("greeting");
const greetingMessage = document.createElement("h2"); */

const habitCollection = document.getElementById("greetingPost"); // will change depending on what id Aditi has set

<<<<<<< HEAD
async function displayAllHabits() {
  const habits = await getAllHabits();
  console.log(habits);
  for (let i = 0; i < habits.length; i++) {
    const { name, frequency, _id, dates } = habits[i];
    let id = _id;
    const habitContainer = document.createElement("div");
    habitContainer.classList = "habit-container";
=======
function displayAllHabits() {
  //  const habits = getAllHabits();
  //  const { name, tracking, frequency, streak } = habits.habits; //not sure what datapoints will be fetched from DB yet
>>>>>>> main

  const habitContainer = document.createElement("div");
  habitContainer.classList = "habit-container";

  const habitHeader = document.createElement("div");
  habitHeader.classList = "habit-header";
  const habitBody = document.createElement("div");
  habitBody.classList = "habit-body";
  const habitFooter = document.createElement("div");
  habitFooter.classList = "habit-footer";

<<<<<<< HEAD
    dates.forEach((entry) => {
      const { date, complete } = entry;
      let dateDisplay = document.createElement("div");
      let dateInfo = document.createElement("p");
      dateInfo.textContent = date;
      dateDisplay.appendChild(dateInfo);
      habitBody.appendChild(dateDisplay);
      let completeBtn = document.createElement("button");
      function switchComplete(complete) {
        return !complete;
      }
      completeBtn.addEventListener("click", () => {
        completeHabit(id, date, switchComplete(complete));

        
      });
      completeBtn.classList = 'complete-button';
      habitFooter.appendChild(completeBtn);
    });

    let currentDate;

    if (frequency.weekly === true) {
      currentDate = new Date();
      const startOfTheWeek = new Date();
      startOfTheWeek.setDate(
        startOfTheWeek.getDate() - currentDate.getDay() + 1
      );
      startOfTheWeek.toLocaleDateString();
      let shortStartOfWeek = startOfTheWeek.toString().slice(0, 10);

      const endOfWeek = new Date();
      endOfWeek.setDate(endOfWeek.getDate() - currentDate.getDay() + 7);
      endOfWeek.toLocaleDateString();
      let shortEndOfWeek = endOfWeek.toString().slice(0, 10);
      currentDate = `${shortStartOfWeek} - ${shortEndOfWeek}`;
    } else {
      currentDate = new Date();
      currentDate.toLocaleDateString();
      currentDate.toString().slice(0, 10);
    }
    let comparisonDate;
    if (dates.length > 1) {
       comparisonDate = dates[-1].date;
    } else {
       comparisonDate = dates[0].date;
    }
    if (currentDate !== comparisonDate) {
      updateDate(currentDate);
    }

    /* let currentDate = new Date();

    const startOfTheWeek = new Date();
    startOfTheWeek.setDate(startOfTheWeek.getDate() - currentDate + 1);
    startOfTheWeek.toLocaleDateString();
    let shortStartOfWeek = startOfTheWeek.toString().slice(0, 10);
    startOfWeekBox.style.display = "block";
    startOfWeekInfo.textContent = shortStartOfWeek; */

    /* const endOfWeek = new Date();
    endOfWeek.setDate(endOfWeek.getDate() - currentDate + 1);
    endOfWeek.setDate(endOfWeek.getDate() + numberOfWeeks * 6);
    endOfWeek.toLocaleDateString();
    let shortEndOfWeek = endOfWeek.toString().slice(0, 10);
    endOfWeekBox.style.display = "block";
    endOfWeekInfo.textContent = shortEndOfWeek; */

    /*let weekComplete = document.createElement("button");
    weekComplete.classList = "week-complete-button";
    habitFooter.appendChild(weekComplete);

    weekComplete.addEventListener("click", () => {
      completeHabit(name, numberOfWeeks); 
    }); */
    // } else if (frequency.daily === true) {
    //   let currentDate = new Date();
    //   currentDate.toLocaleDateString();
    //   currentDate.toString().slice(0, 10);

    //   let dailyCompleteButton = document.createElement("button");
    //   dailyCompleteButton.textContent = currentDate;
    //   dailyCompleteButton.addEventListener("click", () => {
    //     updateDailyTracking(name, currentDate);
    //     currentDate = new Date();
    //   });

    //   habitFooter.appendChild(dailyCompleteButton);
    // } else {
    //   return;
    // }
    habitContainer.appendChild(habitHeader);
    habitContainer.appendChild(habitBody);
    habitContainer.appendChild(habitFooter);
=======
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
>>>>>>> main

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
