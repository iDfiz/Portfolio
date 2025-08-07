document.addEventListener('DOMContentLoaded', () => {
  const fadeTextElements = document.querySelectorAll('.fade-text');
  const carouselContainer = document.querySelector('.carousel-container');

  function checkFadeIn() {
    fadeTextElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('show');
      }
    });

    const carouselRect = carouselContainer.getBoundingClientRect();
    if (carouselRect.top <= window.innerHeight - 100) {
      carouselContainer.classList.add('show');
    }
  }

  window.addEventListener('scroll', checkFadeIn);
  checkFadeIn();
});