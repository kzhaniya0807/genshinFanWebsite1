
"use strict";

// Light/Dark Theme with localStorage

document.addEventListener("DOMContentLoaded", function () {

    const themeButtons = document.querySelectorAll(".theme-toggle");

    // Apply the saved theme when the page loads
    const savedTheme = localStorage.getItem("genshin-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }

    // Update all theme buttons
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

    // Toggle theme and save the choice
    themeButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            document.body.classList.toggle("light-theme");

            const isLightTheme =
                document.body.classList.contains("light-theme");

            localStorage.setItem(
                "genshin-theme",
                isLightTheme ? "light" : "dark"
            );

            updateThemeButtons();
        });
    });

    updateThemeButtons();
});
