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
    const r = await fetch(`http://localhost:3000/login`, options);
    const data = await r.json();
    if (!data.success) {
      throw new Error("Login not authorised");
    }
    login(data.token);
  } catch (err) {
    console.warn(err);
  }
}

async function sendLoginDetails(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new FormData(e.target)),
    };
    const response = await fetch(`${API_URL}/login`, options);
    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      return;
    }
  } catch (err) {
    console.warn(err);
  }
}

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  sendNewUserDetails(e);
});

async function sendNewUserDetails(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    };
    const response = await fetch(`${API_URL}/register`, options);
    const { err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      return;
    }
  } catch (err) {
    console.warn(err);
  }
}
