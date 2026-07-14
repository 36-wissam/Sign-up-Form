const switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    switchButton.textContent = isDarkMode ? "Light" : "Dark";
});