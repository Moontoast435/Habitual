const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  sendLoginDetails(e);
});

async function requestLogin(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(`http://localhost:3000/auth/login`, options);
    const data = await r.json();
    if (!data.success) {
      throw new Error("Login not authorised");
    }
    login(data.token);
  } catch (err) {
    console.warn(err);
  }
}
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  sendNewUserDetails(e);
});
