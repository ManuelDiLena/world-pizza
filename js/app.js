// Menu responsive
let btnMenuOpen = document.getElementById('btnMenuOpen'),
    btnMenuClose = document.getElementById('btnMenuClose'),
    menuResponsive = document.getElementById('barMenu'),
    links = document.getElementsById('links');

  // click open
  btnMenuOpen.addEventListener('click', function() {
    menuResponsive.classList.add('active');
  });

  // click close
  btnMenuClose.addEventListener('click', function() {
    menuResponsive.classList.remove('active');
  });

  // close menu with links elements
  links.addEventListener('click', function() {
    menuResponsive.style.transitionDelay = '0.5s';
    menuResponsive.classList.remove('active');
  });

// Products slider
let container = document.querySelector('.slider'),
    btnLeft = document.getElementById('btnLeft'),
    btnRight = document.getElementById('btnRight');

  // right btn event
  btnRight.addEventListener('click', function() {
    container.scrollLeft += container.offsetWidth;
  });

  // left btn event
  btnLeft.addEventListener('click', function() {
    container.scrollLeft -= container.offsetWidth;
  });

