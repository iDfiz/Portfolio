function animateBoxesOnScroll(sectionSelector, boxSelector, offset = 1.3) {
    const section = document.querySelector(sectionSelector);
    const boxes = document.querySelectorAll(boxSelector);
    const texts = document.querySelectorAll(".contacts .fade-text");

    const trigger = window.innerHeight / offset;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < trigger) {
      boxes.forEach((box, i) => {
        box.style.setProperty('--delay', `${i * 0.1}s`);
        setTimeout(() => {
          box.classList.add("show");
        }, i * 100);
      });
      texts.forEach((text) => {
        text.classList.add("show");
      });
    }
  }

  window.addEventListener("scroll", () => {
    animateBoxesOnScroll(".contacts", ".box_contacts");
  });

  window.addEventListener("load", () => {
    animateBoxesOnScroll(".contacts", ".box_contacts");
});