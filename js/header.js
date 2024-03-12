document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.header-menu-button');
    var navMenu = document.querySelector('.header-nav-menu');

    function toggleMenu() {
        navMenu.classList.toggle('active');
    }

    menuButton.addEventListener('click', function(event) {
        toggleMenu();
        event.stopPropagation(); // Предотвращаем всплывание события
    });

    document.addEventListener('click', function(event) {
        var isClickInsideMenu = navMenu.contains(event.target) || menuButton.contains(event.target);

        if (!isClickInsideMenu && navMenu.classList.contains('active')) {
            toggleMenu(); // Скрыть меню, если нажатие было снаружи
        }
    });
});