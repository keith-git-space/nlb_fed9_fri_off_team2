const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// 1. Check for saved theme in browser memory
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-theme");
    if (toggleBtn) toggleBtn.textContent = "🌆"; 
}

// 2. The Toggle Logic
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-theme");
        
        let theme = "dark";
        if (body.classList.contains("light-theme")) {
            theme = "light";
            toggleBtn.textContent = "🌆";
        } else {
            toggleBtn.textContent = "🌃";
        }
        
        // 3. Save the choice so it works on other pages
        localStorage.setItem("theme", theme);
    });
}