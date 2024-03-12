var clickAnimation = lottie.loadAnimation({
    container: document.getElementById("click-div"), // ID контейнера
    renderer: 'svg', // Рендеринг в SVG/Canvas/HTML
    loop: false, // Зацикливать анимацию или нет
    autoplay: false, // Автозапуск анимации
    path: 'animations/animationClick.json' // Путь к вашему JSON-файлу с анимацией
});
console.log(document.getElementById("click-div"))
document.getElementById("click-div").addEventListener("click", function() {
    clickAnimation.goToAndPlay(0); // Возобновляет анимацию с начала
});