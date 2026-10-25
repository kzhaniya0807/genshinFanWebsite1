"use strict";

// Task 0: Welcome
const travelerName = document.getElementById("traveler-name");
const welcomeMessage = document.getElementById("welcome-message");
const welcomeButton = document.querySelector("#welcome-button");

if (travelerName && welcomeMessage && welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        const name = travelerName.value.trim();

        if (name === "") {
            welcomeMessage.textContent =
                "Please enter your Traveler name to begin your adventure!";
        } else {
            welcomeMessage.textContent =
                "Welcome to Teyvat, " + name + "! Your adventure awaits!";
        }
    });
}


// Task 1: Light/Dark Theme
document.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll(".theme-toggle");

    function updateThemeButtons() {
        const isLightTheme =
            document.body.classList.contains("light-theme");

        themeButtons.forEach(function (button) {
            button.textContent = isLightTheme ? "Dark" : "Light";

            button.setAttribute(
                "aria-label",
                isLightTheme
                    ? "Switch to dark theme"
                    : "Switch to light theme"
            );
        });
    }

    themeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");
            updateThemeButtons();
        });
    });

    updateThemeButtons();
});