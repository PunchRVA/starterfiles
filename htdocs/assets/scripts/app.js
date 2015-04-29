// stuff for all pages

// establish variables
var nav = $('.nav-main');
var navToggleButton = $('.nav-toggle');

//nav toggle function
var navToggle = function(e){
  apollo.toggleClass(nav, 'closed open');
  e.preventDefault();
  e.stopPropagation();
}

// if screen is smaller than 'hand' size
if(Modernizr.mq('only all and (max-width: 46em)')){

  // show toggle and collapse menu
  apollo.addClass(nav, 'active closed');

  // add touch/click event
  $('.nav-toggle').on('touchstart', function(e){
    navToggle(e);
  });

  $('.nav-toggle').on('click', function(e){
    navToggle(e);
  });

}
