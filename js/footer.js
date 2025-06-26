function animateOnScroll(elementSelector, className = "show", offset = 1.2) {
  const element = document.querySelector(elementSelector);
  if (!element) return;

  const trigger = window.innerHeight / offset;
  const top = element.getBoundingClientRect().top;

  if (top < trigger) {
    element.classList.add(className);
  }
}

window.addEventListener("scroll", () => {
  animateOnScroll("footer.animate-up");
});

window.addEventListener("load", () => {
  animateOnScroll("footer.animate-up");
});