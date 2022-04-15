const navBurger = document.querySelector('.nav-burger');
const header = document.querySelector('#header');

navBurger.addEventListener('click', function () {
    header.classList.toggle('active');
});