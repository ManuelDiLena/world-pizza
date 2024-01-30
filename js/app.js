// MENU RESPONSIVE
let btnMenuOpen = document.getElementById('btnMenuOpen');
    btnMenuClose = document.getElementById('btnMenuClose');
    menuResponsive = document.getElementById('barMenu');
    links = document.getElementById('links');

    // Click Open
    btnMenuOpen.addEventListener('click', function() {
      menuResponsive.classList.add('active');
    });

    // Click Close
    btnMenuClose.addEventListener('click', function() {
      menuResponsive.classList.remove('active');
    });

    // Close menu with link elements
    links.addEventListener('click', function() {
      menuResponsive.style.transitionDelay = '0.5s';
      menuResponsive.classList.remove('active');
    });

// PRODUCTS SLIDER
let container = document.querySelector('.slider');
    btnLeft = document.getElementById('btnLeft');
    btnRight = document.getElementById('btnRight');

    // Right btn event
    btnRight.addEventListener('click', function() {
      container.scrollLeft += container.offsetWidth;
    });

    // Left btn event
    btnLeft.addEventListener('click', function() {
      container.scrollLeft -= container.offsetWidth;
    });