document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.header-menu-button');
    var navMenu = document.querySelector('.nav-menu');
    const bg = document.querySelector(".first-block__bg")
    bg.addEventListener("click", event => event.stopPropagation())
    function toggleMenu() {
        navMenu.classList.toggle('active');
    }

    menuButton.addEventListener('click', function(event) {
        toggleMenu();
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        var isClickInsideMenu = navMenu.contains(event.target) || menuButton.contains(event.target);

        if (!isClickInsideMenu && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    var menuLinks = document.querySelectorAll('.nav-menu a');

    // Добавляем каждой ссылке обработчик события click
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Закрываем меню, если оно открыто
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});