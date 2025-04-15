// Theme toggle logic
const toggleButton = document.getElementById("themeToggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Set theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
});
