const loginForm = document.querySelector("#login-form");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(evnet)
}

loginForm.addEventListener("submit", onLoginSubmit);