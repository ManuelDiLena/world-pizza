// Menu responsive
let btnMenuOpen = document.getElementById('btnMenuOpen'),
    btnMenuClose = document.getElementById('btnMenuClose'),
    menuResponsive = document.getElementById('barMenu'),
    links = document.getElementById('links');

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

// Form validation
let form = document.getElementById('form');

function validation(e) {
  let inputName = document.getElementById('name'),
      inputEmail = document.getElementById('email'),
      inputComments = document.getElementById('comments'),
      alertSuccess = document.getElementById('alertSuccess'),
      alertError = document.getElementById('alertError');

  if (inputName.value == 0 || inputEmail.value == 0 || inputComments.value == 0) {
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
    inputComments.value = "";
  }
}

// Form events
form.addEventListener('submit', validation);

// Btn scroll top
let btnTop = document.getElementById('btnTop'),
    logo = document.getElementById('logo');

window.addEventListener('scroll', function() {
  let scroll = document.documentElement.scrollTop,
      fullSize = document.documentElement.offsetHeight,
      sizeVP = document.documentElement.clientHeight;

  if (scroll > 100) {
    btnTop.classList.add('show');
  } else {
    btnTop.classList.remove('show');
  }

  if (fullSize == (scroll + sizeVP)) {
    btnTop.classList.add('scroll-final');
  } else {
    btnTop.classList.remove('scroll-final');
  }
});

// Detect btn click event
btnTop.addEventListener('click', function() {
  window.scrollTo(0,0);
});

// Detect logo click event
logo.addEventListener('click', function() {
  window.scrollTo(0,0);
});
