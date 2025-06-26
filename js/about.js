window.addEventListener("scroll", () => {
    const textBlock = document.querySelector(".about .info.animate-left");
    const avatarBlock = document.querySelector(".about .avatar.animate-right");
    const triggerPoint = window.innerHeight / 1.3; // когда блок появляется в зоне видимости

    if (textBlock && textBlock.getBoundingClientRect().top < triggerPoint) {
      textBlock.classList.add("show");
    }

    if (avatarBlock && avatarBlock.getBoundingClientRect().top < triggerPoint) {
      avatarBlock.classList.add("show");
    }
});