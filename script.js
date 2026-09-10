document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page-section");
  const logoBtn = document.getElementById("logo-btn");

  function switchPage(targetId) {
    // Hide all pages and show the targeted page
    pages.forEach((page) => {
      page.classList.toggle("active", page.id === targetId);
    });

    // Update active state across top navigation links
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === targetId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Click handler for navigation items
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      switchPage(link.dataset.target);
    });
  });

  // Power logo returns user directly to Home
  logoBtn.addEventListener("click", () => {
    switchPage("home");
  });
});