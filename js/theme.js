const body = document.body;
const toggleBtnEn = document.getElementById('theme-toggle-en');
const toggleBtnRu = document.getElementById('theme-toggle-ru');

// Функция для установки текста в зависимости от темы
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

// При загрузке страницы — проверяем сохранённую тему
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  updateThemeText(true);
  updateIconsForTheme();
} else {
  updateThemeText(false);
  updateIconsForTheme();
}

[toggleBtnEn, toggleBtnRu].forEach(btn => {
  btn.addEventListener('click', () => {
    const isLight = !body.classList.contains('light-theme');
    body.classList.toggle('light-theme');
    updateThemeText(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateIconsForTheme(); // вот тут
  });
});