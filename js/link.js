const projects = {
  "online-store": {
    ru: {
      title: "Онлайн-магазин игровых аксессуаров",
      description: "Это демонстрационный интернет-магазин, созданный для показа навыков веб-разработки. Здесь представлены товары из категорий:",
      description_list1: "клавиатуры, мыши, гарнитуры, микрофоны",
      description_list2: "с адаптивной версткой",
      description_list3: "реализована корзина с обновлением в реальном времени",
      description_list4: "навигация между страницами без перезагрузки (SPA)",
      warn: "Магазин не осуществляет реальную продажу товаров и предназначен исключительно для демонстрации функциональности и дизайна. Все бренды являются вымышленными, а изображения товаров сгенерированы с помощью нейросетей.",
    },
    en: {
      title: "Online Gaming Accessories Store",
      description: "This is a demo e-commerce site built to showcase web development skills. It features products from the following categories:",
      description_list1: "keyboards, mice, headsets, microphones",
      description_list2: "with responsive layout",
      description_list3: "cart with real-time updates",
      description_list4: "page navigation without reloads (SPA)",
      warn: "This store does not sell real products and is intended solely to demonstrate functionality and design. All brands are fictional and product images are AI-generated.",
    },
    url: "https://idfiz.github.io/Online-Store/"
  },
};

// Функция для обновления иконок под текущую тему
function updateIconsForTheme() {
  const body = document.body;
  const isLight = body.classList.contains('light-theme');
  const icons = document.querySelectorAll('img[data-icon]');
  icons.forEach(img => {
    const name = img.getAttribute('data-icon');
    img.src = `img/icons/${isLight ? 'black' : 'white'}/${name}.png`;
  });
}

// Функция применения сохранённой темы
function applySavedTheme() {
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  const isLight = savedTheme === 'light';

  if (isLight) {
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
  }
  updateIconsForTheme();
}

window.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();

  // Получаем выбранный язык из localStorage, по умолчанию en
  const lang = localStorage.getItem('lang') || 'en';

  // Получаем projectKey из параметров URL, например: link.html?project=online-store
  const urlParams = new URLSearchParams(window.location.search);
  const projectKey = urlParams.get('project');

  if (!projectKey || !projects[projectKey]) {
    // Если проект не найден
    document.getElementById("project-title").textContent = "Проект не найден";
    document.getElementById("project-description").textContent = "Указан неверный параметр в ссылке.";
    document.getElementById("timer").style.display = "none";
    return;
  }

  // Берём проект и данные на нужном языке
  const project = projects[projectKey];
  const data = project[lang];

  // Заполняем контент
  document.getElementById("project-title").textContent = data.title;
  document.getElementById("project-description").textContent = data.description;
  document.getElementById("project-description_list1").textContent = data.description_list1;
  document.getElementById("project-description_list2").textContent = data.description_list2;
  document.getElementById("project-description_list3").textContent = data.description_list3;
  document.getElementById("project-description_list4").textContent = data.description_list4;
  document.getElementById("project-warn").textContent = data.warn;

  // Таймер обратного отсчёта
  let seconds = 10;
  const timerEl = document.getElementById("timer");

  const interval = setInterval(() => {
    seconds--;
    timerEl.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(interval);
      window.open(project.url, '_blank');
      window.location.href = "index.html";
    }
  }, 1000);

  // Анимация и появление элементов
  document.querySelectorAll(".skills .box_skills").forEach((box, i) => {
    box.style.setProperty('--delay', `${i * 0.1}s`);
    setTimeout(() => box.classList.add("show"), i * 100);
  });

  document.querySelectorAll(".skills .fade-text").forEach(text => {
    text.classList.add("show");
  });

  const fadeTextElements = document.querySelectorAll(".fade-text");
  const checkFadeIn = () => {
    fadeTextElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) el.classList.add("show");
    });
  };
  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn();

  const warn = document.querySelector(".warn");
  if (warn) setTimeout(() => warn.classList.add("show"), 100);
});