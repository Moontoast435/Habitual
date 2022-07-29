// Placeholder id's have been used, will be changed to reflect the actual HTML element ID's

/* const greetingBox = document.getElementById("greeting");
const greetingMessage = document.createElement("h2"); */

const habitCollection = document.getElementById("greetingPost"); // will change depending on what id Aditi has set

async function displayAllHabits() {
  const habits = await getAllHabits();
  
  for (let i = 0; i < habits.length; i++) {
    const { name, frequency, _id, dates } = habits[i];
    let id = _id;
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

    dates.forEach((entry) => {
      const { date, complete } = entry;
      let dateDisplay = document.createElement("div");
      dateDisplay.classList = "date-display";
      let dateInfo = document.createElement("p");
      dateInfo.textContent = date;
      dateDisplay.appendChild(dateInfo);
      habitBody.appendChild(dateDisplay);
      let completeBtn = document.createElement("button");
      
      if (complete) {
        completeBtn.style.backgroundColor = 'purple';
        completeBtn.style.color = 'white';
        completeBtn.textContent = 'Complete!'
      } else {
        completeBtn.style.backgroundColor = 'transparent';
        completeBtn.style.color = 'black';
        completeBtn.textContent = 'Incomplete';
      } 
      function switchComplete(complete) {
        return !complete;
      }
      completeBtn.addEventListener("click",  () => {

      
        completeHabit(id, date, switchComplete(complete));
        const completeBtnBackgroundColor = completeBtn.style.backgroundColor;
       if (completeBtnBackgroundColor === 'transparent') {
        completeBtn.style.backgroundColor = 'purple'
        
       } else {
        completeBtn.style.backgroundColor = 'transparent';
       }

        
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

    habitCollection.appendChild(habitContainer);
  }
}
displayAllHabits();
