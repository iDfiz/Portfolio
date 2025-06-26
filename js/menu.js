const menu = document.getElementById('menu');
let lastScrollTop = 0;
let isScrolling = false;

// 1. Анимация появления при загрузке
window.addEventListener('DOMContentLoaded', () => {
  menu.classList.add('menu-visible');
});

// 2. Плавное скрытие при скролле вниз и появление вверх
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (!isScrolling) {
    // Не трогаем меню при первом скролле (даём анимации загрузки закончиться)
    isScrolling = true;
    return;
  }

  if (scrollTop > lastScrollTop) {
    // Скролл вниз
    menu.classList.add('hide-menu');
  } else {
    // Скролл вверх
    menu.classList.remove('hide-menu');
  }

  lastScrollTop = Math.max(scrollTop, 0);
});