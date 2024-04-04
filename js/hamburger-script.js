window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu__list'),
    menuItem = document.querySelectorAll('.nav-menu__item'),
    hamburger = document.querySelector('.hamburger');
    menuHidden = document.querySelector('.nav-menu__menu-hidden');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu__list_active');
        menuHidden.classList.toggle('menu-hidden_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu__list_active');
            menuHidden.classList.toggle('menu-hidden_active');
        })
    })
})