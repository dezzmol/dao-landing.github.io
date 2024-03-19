function initSlider() {
  const slider = document
    .getElementById("showcases-slider")
    .querySelector(".showcases__slider");
  const nextButton = document
    .getElementById("showcases-slider")
    .querySelector(".showcases__arrow--right");
  const prevButton = document
    .getElementById("showcases-slider")
    .querySelector(".showcases__arrow--left");
  let slides = Array.from(slider.children); // Собираем массив слайдов
  let currentIndex = 0;
  // Скрытие стрелки назад в начале
  nextButton.addEventListener("click", () => {
    if (currentIndex < 5) {
      currentIndex++;
    }
    slider.scrollTo({
      left: currentIndex * 300,
      behavior: "smooth",
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    }
    slider.scrollTo({
      left: currentIndex * 300,
      behavior: "smooth",
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 769) {
    initSlider();
  }
});
