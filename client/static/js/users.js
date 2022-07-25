const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  sendLoginDetails(e);
});

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  sendNewUserDetails(e);
});
