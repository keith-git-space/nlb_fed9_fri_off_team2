const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const darkToggle = document.getElementById("darkToggle");


menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});