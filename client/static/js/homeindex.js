const createHabitForm = document.getElementById("createHabitForm");
console.log(createHabitForm);
createHabitForm.addEventListener("submit", (e) => {
  e.preventDefault;
  createHabit();
});
