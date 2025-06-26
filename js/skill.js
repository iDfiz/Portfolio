window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills");
    const boxes = document.querySelectorAll(".skills .box_skills");
    const texts = document.querySelectorAll(".skills .fade-text");

    const trigger = window.innerHeight / 1.3;
    const sectionTop = skillsSection.getBoundingClientRect().top;

    if (sectionTop < trigger) {
      // Анимация иконок
      boxes.forEach((box, i) => {
        box.style.setProperty('--delay', `${i * 0.1}s`);
        setTimeout(() => {
          box.classList.add("show");
        }, i * 100);
      });

      // Плавное появление текста
      texts.forEach((text) => {
        text.classList.add("show");
      });
    }
});