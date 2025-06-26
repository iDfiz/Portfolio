const telegramIcons = document.querySelectorAll('img[data-icon="telegram"]');
const modal = document.getElementById('telegram-modal');
const closeBtn = modal.querySelector('.close');
telegramIcons.forEach(icon => {
  let btn = icon.closest('button');
  // Если иконка не в button (как в блоке контактов), ищем кнопку-соседку вручную
  if (!btn) {
    const parentBox = icon.closest('.box_contacts');
    btn = parentBox?.querySelector('button');
  }
  // Навешиваем обработчик на найденную кнопку
  if (btn) {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }
});
// Закрытие при клике на крестик
closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});
// Закрытие при клике вне модального окна
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});