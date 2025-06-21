// Theme toggle with icon and localStorage
const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "🌙";
    } else {
        document.body.classList.remove("dark");
        themeToggle.textContent = "🌞";
    }
    localStorage.setItem("theme", mode);
}

function getSavedTheme() {
    return localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    setTheme(isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
    setTheme(getSavedTheme());
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            }
        });
    });
});
