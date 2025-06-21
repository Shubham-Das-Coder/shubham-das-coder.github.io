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

    // Tab switching logic
    const buttons = document.querySelectorAll('.section-btn');
    const panels = document.querySelectorAll('.section-panel');

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            // Hide all panels
            panels.forEach(p => p.style.display = 'none');
            // Activate this button
            this.classList.add('active');
            // Show the corresponding panel
            const section = this.getAttribute('data-section');
            const panel = document.getElementById(section);
            if (panel) {
                panel.style.display = 'flex';
                // panel.scrollIntoView({ behavior: "smooth", block: "start" }); // Removed to prevent page movement
            }
        });
    });
});
