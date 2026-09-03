const menu = document.querySelector(".nav-menu");
const button = document.querySelector(".menu-btn");

button?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav-menu a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    button?.setAttribute("aria-expanded", "false");
    if (button) button.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(".service-card, .project, .tool-row, .steps > div");
const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

cards.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  reveal.observe(el);
});
