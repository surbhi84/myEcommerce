let signup = document.querySelector(".sign-up");
let login = document.querySelector(".login");
let signupCard = document.querySelector(".signup-card");
let loginCard = document.querySelector(".login-card");

signupCard.style.display = "none";

login.addEventListener("click", showLogin);
signup.addEventListener("click", showSignup);

function showSignup() {
  loginCard.style.display = "none";
  signupCard.style.display = "flex";
}

function showLogin() {
  signupCard.style.display = "none";
  loginCard.style.display = "flex";
}
