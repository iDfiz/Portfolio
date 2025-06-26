window.addEventListener("load", function () {
    const heroBox = document.querySelector(".hero .box_hero");
    setTimeout(() => {
      heroBox.classList.add("show");
    }, 200); // можно немного задержать, чтобы было мягко
});