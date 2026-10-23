const themeButton = document.getElementById("theme-toggle");

function updateThemeButton() {
    const isLight = document.body.classList.contains("light-theme");

    themeButton.textContent = isLight
        ? "Switch to Dark Theme"
        : "Switch to Light Theme";

    themeButton.setAttribute("aria-pressed", String(isLight));
}

if (themeButton) {
    const savedTheme = localStorage.getItem("genshinhub-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    updateThemeButton();

    themeButton.addEventListener("click", function () {
        const isLight = document.body.classList.toggle("light-theme");

        localStorage.setItem(
            "genshinhub-theme",
            isLight ? "light" : "dark"
        );

        updateThemeButton();
    });
}