const body = document.body;
const toggleBtnEn = document.getElementById('theme-toggle-en');
const toggleBtnRu = document.getElementById('theme-toggle-ru');

function updateThemeText(isLight) {
  toggleBtnEn.textContent = isLight ? '🌙 Dark theme' : '☀️ Light theme';
  toggleBtnRu.textContent = isLight ? '🌙 Тёмная тема' : '☀️ Светлая тема';
}

function updateIconsForTheme() {
  const isLight = body.classList.contains('light-theme');
  const icons = document.querySelectorAll('img[data-icon]');
  icons.forEach(img => {
    const name = img.getAttribute('data-icon');
    img.src = `img/icons/${isLight ? 'black' : 'white'}/${name}.png`;
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const isLight = savedTheme === 'light';

  if (isLight) {
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
  }

  updateThemeText(isLight);
  updateIconsForTheme();
}

function toggleTheme() {
  const isLight = !body.classList.contains('light-theme');
  body.classList.toggle('light-theme');
  updateThemeText(isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateIconsForTheme();
}

[toggleBtnEn, toggleBtnRu].forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});

window.addEventListener('DOMContentLoaded', initTheme);