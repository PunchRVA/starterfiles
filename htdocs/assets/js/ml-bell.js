var foo = document.getElementsByClassName('main-nav__item')[0];

// Mobile navigation
$('.header__hamburger').on('tap click', function() {
  $('.header').toggleClass("header--show-mobile-nav");
});
