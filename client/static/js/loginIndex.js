const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    requestRegistration(e);
});
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    requestLogin(e);
});
