const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menu-icon');
const menuContent = document.getElementById('menu-content');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.querySelector('.nav-links');
const imgLogo = document.querySelector('.img-logo');

// Scroll-menu function
window.addEventListener('scroll', () => {
    if (window.scrollY > 100 || window.innerWidth <= 768) {
        navbar.classList.add('scrolled');
        navLinks.style.display = 'none'; 
        menuIcon.style.display = 'flex'; 
        imgLogo.src = './images/logo-2.png';
    } else {
        navbar.classList.remove('scrolled');
        navLinks.style.display = 'flex'; 
        menuIcon.style.display = 'none'; 
        menuContent.style.display = 'none'; 
        imgLogo.src = './images/Frame.png';
    }
});

menuIcon.addEventListener('click', () => {
    menuContent.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menuContent.style.display = 'none';
});


//Search function
document.getElementById('search-toggle').addEventListener('click', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    searchContainer.classList.toggle('active');

    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
    }
});


// EN-ES function
document.getElementById('es-button').addEventListener('click', function() {
    setActiveButton('es-button');
});

document.getElementById('en-button').addEventListener('click', function() {
    setActiveButton('en-button');
});

function setActiveButton(buttonId) {
    document.getElementById('es-button').classList.remove('active');
    document.getElementById('en-button').classList.remove('active');
    document.getElementById(buttonId).classList.add('active');
}

// EN-ES burguer-button function
document.getElementById('burguer-es-button').addEventListener('click', function() {
    setActiveButton('burguer-es-button');
});

document.getElementById('burguer-en-button').addEventListener('click', function() {
    setActiveButton('burguer-en-button');
});

function setActiveButton(buttonId) {
    document.getElementById('burguer-es-button').classList.remove('active');
    document.getElementById('burguer-en-button').classList.remove('active');
    document.getElementById(buttonId).classList.add('active');
}

// Dot function

let dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
    });
});
