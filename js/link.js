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
    skills: ["react", "vite", "js", "html"],
    url: "https://idfiz.github.io/Online-Store/"
  },
  "tournaments-bracket": {
    ru: {
      title: "Библиотека для создания турнирных сеток",
      description: "Это библиотека для разработчиков, предназначенная для быстрого создания и отображения турнирных сеток",
      description_list1: "автоматическая генерация сеток на основе количества участников",
      description_list2: "поддержка различных форматов турниров и пользовательской структуры раундов",
      description_list3: "гибкая настройка внешнего вида: цвета, размеры, линии и оформление победителей и проигравших",
      description_list4: "интеграция в проекты на React с возможностью адаптации под собственный дизайн",
      warn: "Библиотека предназначена для упрощения работы с турнирными сетками и может использоваться в игровых, спортивных, киберспортивных и других проектах."
    },
    en: {
      title: "Library for Creating Tournament Brackets",
      description: "A developer-oriented library designed to quickly create and display tournament brackets",
      description_list1: "automatic bracket generation based on the number of participants",
      description_list2: "support for various tournament formats and custom round structures",
      description_list3: "flexible appearance customization: colors, sizes, lines, and winner and loser styling",
      description_list4: "integration into React projects with the ability to adapt the design to your own style",
      warn: "The library is designed to simplify working with tournament brackets and can be used in gaming, sports, esports, and other projects."
    },
    skills: ["react", "vite", "js", "ts", "html", "css", "npm", "i18n", "github"],
    url: "https://idfiz.github.io/Tournaments-Bracket/"
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
  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get('project');

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

// Генерация стека технологий проекта
function renderProjectSkills(skills) {
    const container = document.getElementById("project-skills");

    container.innerHTML = "";

    skills.forEach((skill, i) => {
        const box = document.createElement("div");
        box.className = "box_skills";
        box.style.padding = "30px";
        box.style.setProperty('--delay', `${i * 0.1}s`);

        const img = document.createElement("img");
        img.src = `img/icons/${document.body.classList.contains('light-theme') ? 'black' : 'white'}/${skill}.png`;
        img.alt = skill;
        img.dataset.icon = skill;

        box.appendChild(img);
        container.appendChild(box);

        setTimeout(() => box.classList.add("show"), i * 100);
    });
}

  // Заполняем контент
  document.getElementById("project-title").textContent = data.title;
  document.getElementById("project-description").textContent = data.description;
  document.getElementById("project-description_list1").textContent = data.description_list1;
  document.getElementById("project-description_list2").textContent = data.description_list2;
  document.getElementById("project-description_list3").textContent = data.description_list3;
  document.getElementById("project-description_list4").textContent = data.description_list4;
  renderProjectSkills(project.skills || []);
  document.getElementById("project-warn").textContent = data.warn;

  // Таймер обратного отсчёта
  let seconds = 10;
  const timerEl = document.getElementById("timer");

  const interval = setInterval(() => {
      seconds--;
      timerEl.textContent = seconds;
      console.log('Redirecting to', project.url);
      if (seconds <= 0) {
          clearInterval(interval);
          window.location.href = project.url + '#/'; // Меняем текущую вкладку link.html на интернет-магазин
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