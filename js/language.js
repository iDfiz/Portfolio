window.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('btn-en');
  const btnRu = document.getElementById('btn-ru');

  const enBlocks = document.querySelectorAll('.lang-en');
  const ruBlocks = document.querySelectorAll('.lang-ru');

  btnEn.onclick = () => {
    console.log('English clicked');
    enBlocks.forEach(el => el.style.display = 'block');
    ruBlocks.forEach(el => el.style.display = 'none');
    btnEn.classList.add('active');
    btnEn.classList.remove('show');
    btnRu.classList.add('show');
    btnRu.classList.remove('active');
  };

  btnRu.onclick = () => {
    console.log('Russian clicked');
    enBlocks.forEach(el => el.style.display = 'none');
    ruBlocks.forEach(el => el.style.display = 'block');
    btnRu.classList.add('active');
    btnRu.classList.remove('show');
    btnEn.classList.add('show');
    btnEn.classList.remove('active');
  };
});
