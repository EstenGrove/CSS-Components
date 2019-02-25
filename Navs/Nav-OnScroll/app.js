// Elements to Change on Scroll
const nav = document.querySelector('.navbar');
const logo = document.querySelector('.navLink');
const menu = document.querySelector('.icon');


// Change nav height & the logo, menu top property
const expandNav = () => {
    let scrolled = window.pageYOffset;
    if (scrolled > 50) {
        nav.style.height = '8rem';
        nav.style.backgroundColor = '#222';
        logo.style.top = '4rem';
        menu.style.top = '4rem';
        menu.style.fill = '#e84855';
    } else if (scrolled < 50) {
        nav.style.height = '';
        nav.style.backgroundColor = 'transparent';
        logo.style.top = '1rem';
        menu.style.top = '1rem';
        menu.style.fill = '';
    }
}

window.onscroll = (e) => expandNav();