document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page-section");
  const logoBtn = document.getElementById("logo-btn");

  function switchPage(targetId) {
    // 1. Hide other pages, show the selected one
    pages.forEach((page) => {
      page.classList.toggle("active", page.id === targetId);
    });

    // 2. Set active styling on top navigation tabs
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === targetId);
    });

    // 3. Smooth scroll up to header
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle Tab clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      switchPage(link.dataset.target);
    });
  });

  // Handle Power Logo click (returns to Home)
  logoBtn.addEventListener("click", () => {
    switchPage("home");
  });
});