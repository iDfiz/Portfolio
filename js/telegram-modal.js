const telegramIcons = document.querySelectorAll('img[data-icon="telegram"]');
const modal = document.getElementById('telegram-modal');
const closeBtn = modal.querySelector('.close');

telegramIcons.forEach(icon => {
  let btn = icon.closest('button');

  if (btn) {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  } else {
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
});

closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
