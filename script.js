const switchButton = document.getElementById("switchButton");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");


// First Name validation
firstName.addEventListener("input", function () {
    const error = document.getElementById("first-name-error");

    if (firstName.value.length < 3 || firstName.value.length > 20) {
        error.textContent = "First name must be 3-20 characters.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});


// Last Name validation
lastName.addEventListener("input", function () {
    const error = document.getElementById("last-name-error");

    if (lastName.value.length < 3 || lastName.value.length > 20) {
        error.textContent = "Last name must be 3-20 characters.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});


// Email validation
email.addEventListener("input", function () {
    const error = document.getElementById("email-error");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email.value)) {
        error.textContent = "Enter a valid email.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});


// Password validation
password.addEventListener("input", function () {
    const error = document.getElementById("password-error");

    if (password.value.length < 6 || password.value.length > 20) {
        error.textContent = "Password must be 6-20 characters.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});


// Dark Mode
switchButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    switchButton.textContent = isDarkMode ? "Light" : "Dark";
});
