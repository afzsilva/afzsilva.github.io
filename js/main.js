let header = document.querySelector('#header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');

});

let hero = document.querySelector('a[href="#hero"]');
let habilidades = document.querySelector('a[href="#habilidades"]');
let projetos = document.querySelector('a[href="#projetos"]');
let contato = document.querySelector('a[href="#contato"]');


hero.addEventListener('click', function () {
    header.classList.remove('menu-open');
});
habilidades.addEventListener('click', function () {
    header.classList.remove('menu-open');
});
projetos.addEventListener('click', function () {
    header.classList.remove('menu-open');
});
contato.addEventListener('click', function () {
    header.classList.remove('menu-open');
});
