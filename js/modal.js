// Находим все иконки с data-icon
const icons = document.querySelectorAll('img[data-icon]');

icons.forEach(icon => {
  const iconType = icon.dataset.icon; // например "telegram"
  const modal = document.getElementById(`${iconType}-modal`);
  
  if (!modal) return; // если модалки нет — пропускаем
  
  const closeBtn = modal.querySelector('.close');

  // Кликаем по ближайшей кнопке
  let btn = icon.closest('button');
  
  if (btn) {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  } else {
    // Если кнопка не найдена, ищем внутри .box_contacts
    const parentBox = icon.closest('.box_contacts');
    if (parentBox) {
      const buttons = parentBox.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          modal.style.display = 'flex';
        });
      });
    }
  }

  // Закрытие по крестику
  closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие по клику вне модалки
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
