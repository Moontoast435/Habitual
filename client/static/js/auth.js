let API_URL = `http://localhost:3000`;

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  requestLogin(e);
});

async function requestLogin(e) {
  e.preventDefault();

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const response = await fetch(`${API_URL}/login`, options);
    const data = await response.json();
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
  requestRegistration(e);
});

async function requestRegistration(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const response = await fetch(`${API_URL}/register`, options);
    const data = await response.json();
    if (data.err) {
      throw Error(data.err);
    }
    requestLogin(e);
  } catch (err) {
    console.warn(err);
  }
}

function login(token) {
  const user = jwt_decode(token);
  localStorage.setItem("token", token);
  localStorage.setItem("username", user.username);
  location.href = "/homeindex.html";
}

function logout() {
  localStorage.clear();
  location.href = "/loginindex.html";
}

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}
