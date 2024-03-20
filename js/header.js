document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.header-menu-button');
    var navMenu = document.querySelector('.nav-menu');
    const bg = document.querySelector(".first-block__bg")
    const buttonContent = document.querySelector(".header-menu-button__content")
    bg.addEventListener("click", event => event.stopPropagation())
    let isClicked = false;

    window.addEventListener("resize", function() {
        const widthOutput = window.innerWidth;
        if (widthOutput > 769) {
            let header = document.querySelector(".header")
            header.style.marginTop = "0px"
        }

    } )

    function toggleMenu() {
        const widthOutput = window.innerWidth;
        if (widthOutput > 769) {
            return
        }
        if (isClicked) {
            let header = document.querySelector(".header")
            header.style.marginTop = "80px"
        }
        navMenu.classList.toggle('active');
        if (isClicked) {
            navMenu.style.top = "160px"
        }
        buttonContent.classList.toggle("active")
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
                isClicked = true;
                toggleMenu();
            }
        });
    });
});