(function () {
    var storageKey = "spoton-theme";
    var root = document.documentElement;
    var buttons;

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        if (!buttons) {
            buttons = document.querySelectorAll("[data-theme-toggle]");
        }
        buttons.forEach(function (button) {
            button.textContent = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
            button.setAttribute("aria-label", button.textContent);
        });
    }

    function getPreferredTheme() {
        var saved = localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark") {
            return saved;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function toggleTheme() {
        var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
    }

    document.addEventListener("DOMContentLoaded", function () {
        buttons = document.querySelectorAll("[data-theme-toggle]");
        applyTheme(getPreferredTheme());
        buttons.forEach(function (button) {
            button.addEventListener("click", toggleTheme);
        });
    });
})();
