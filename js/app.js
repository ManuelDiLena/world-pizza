// MENU RESPONSIVE
let btnMenuOpen = document.getElementById('btnMenuOpen'),
    btnMenuClose = document.getElementById('btnMenuClose'),
    menuResponsive = document.getElementById('barMenu'),
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
let container = document.querySelector('.slider'),
    btnLeft = document.getElementById('btnLeft'),
    btnRight = document.getElementById('btnRight');

    // Right btn event
    btnRight.addEventListener('click', function() {
      container.scrollLeft += container.offsetWidth;
    });

    // Left btn event
    btnLeft.addEventListener('click', function() {
      container.scrollLeft -= container.offsetWidth;
    });

// FORM VALIDATION
let form = document.getElementById('form');

function validation(e) {
  let inputName = document.getElementById('name'),
      inputEmail = document.getElementById('email'),
      inpputComments = document.getElementById('comments'),
      alertSuccess = document.getElementById('alertSuccess'),
      alertError = document.getElementById('alertError');

  if (inputName.value == 0 || inputEmail.value == 0 || inpputComments.value == 0) {
    e.preventDefault();
    alertError.classList.remove('hide');
    alertError.classList.add('show');

    setTimeout(function() {
      alertError.classList.remove('show');
      alertError.classList.add('hide');
    }, 2000);

  } else {
    e.preventDefault();
    alertSuccess.classList.remove('hide');
    alertSuccess.classList.add('show');

    setTimeout(function() {
      alertSuccess.classList.remove('show');
      alertSuccess.classList.add('hide');
    }, 2000);
    inputName.value = "";
    inputEmail.value = "";
    inpputComments.value = "";
  }
}

// Form events
form.addEventListener('submit', validation);