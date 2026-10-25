"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll(".theme-toggle");

    function updateThemeButtons() {
        const isLightTheme = document.body.classList.contains("light-theme");

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
