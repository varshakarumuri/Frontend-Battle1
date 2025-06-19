function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");

  // Optional: Update toggle button text
  const toggleButton = document.querySelector("nav button");
  const isDark = body.classList.contains("dark");
  toggleButton.textContent = isDark ? "🌙 / ☀️" : "☀️ / 🌙";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}

const sections = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  hideLoader();
  revealOnScroll();
});
