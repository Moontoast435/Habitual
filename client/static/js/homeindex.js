const createHabitForm = document.getElementById("createHabitForm");

createHabitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createHabit();
});
