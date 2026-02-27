document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const darkToggle = document.getElementById("darkToggle");
  const form = document.querySelector(".contact-form");

  // Mobile menu
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Dark mode
  darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Fake form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });

});