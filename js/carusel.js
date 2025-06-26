const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const items = document.querySelectorAll('.box_projects');
let currentIndex = 0;
const gap = 10;
const itemWidth = items[0].offsetWidth + 20; // ширина + gap
nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
function updateCarousel() {
  track.style.transform = `translateX(-${(itemWidth+gap) * currentIndex}px)`;
}
// Чтобы при ресайзе не ломалось
window.addEventListener("resize", () => {
  updateCarousel();
});