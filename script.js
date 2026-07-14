const switchButton = document.getElementById("switchButton");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const zip = document.getElementById("zip");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const sex = document.querySelectorAll('input[name="sex"]');


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

// Zip Code validation
zip.addEventListener("input", function () {
    const error = document.getElementById("zip-error");
    const pattern = /^\d{5}$/;

    if (!pattern.test(zip.value)) {
        error.textContent = "Enter a valid 5-digit zip code.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});


// Address validation
address.addEventListener("input", function () {
    const error = document.getElementById("address-error");

    if (address.value.trim() === "") {
        error.textContent = "Address cannot be empty.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

// City validation
city.addEventListener("input", function () {
    const error = document.getElementById("city-error");

    if (city.value.trim() === "") {
        error.textContent = "City cannot be empty.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

// State validation
state.addEventListener("input", function () {
    const error = document.getElementById("state-error");

    if (state.value.trim() === "") {
        error.textContent = "State cannot be empty.";
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
