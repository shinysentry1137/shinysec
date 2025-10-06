// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("header nav ul");

  // Toggle the "show" class on click
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Optional: Close menu when clicking a link
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
    });
  });
});
