const loginForm = document.querySelector("#login")
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");

const HIDDENCLASSNAME = "hidden";
const USERNAMEKEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDENCLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAMEKEY", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDENCLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAMEKEY");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDENCLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}