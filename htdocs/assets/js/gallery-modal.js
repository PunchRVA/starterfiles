// IE11 doesn't have document.location.origin?!?!?!?
if (document.location.origin === undefined) {
  var loc = document.location
  loc.origin = loc.protocol + "//" + loc.host
}

// Gallery modal
var gallery = {};

gallery.timer = {};

gallery.close_modal = function(){
  $('body').removeClass('gallery--open');

  // Stop gallery timer
  clearInterval(gallery.timer);

  // Clear gallery
  $('.gallery__photobox').empty();
}

gallery.prepare_text_content = function(project_name, loc, footprint, duration) {
  var txt_content = [project_name];

  if (loc.length > 0) {
    txt_content.push("<br>Location:", loc);
  }
  if (footprint) {
    txt_content.push("<br>Footprint:", footprint);
  } else if (duration.length > 0) {
    txt_content.push("<br>Duration:", duration);
  }
  return txt_content.join(' ');
}

gallery.prepare_photo_content = function(photo_urls) {
  if (photo_urls.length > 1) {
    for (var i = 0; i < photo_urls.length; i++) {
      var photo = $('<div>', {"class": "gallery__photo"});

      photo.css('background-image', "url("+ encodeURI(photo_urls[i]) +")");
      photo.appendTo('.gallery__photobox');
    };
  }
};

gallery.next_image = function() {
  var next = $('.gallery__photo.is-current').removeClass('is-current').next();
  if (!next.length) {next = $(".gallery__photo").first();}
  next.addClass('is-current');
};

gallery.start_timer = function() {
  gallery.timer = setInterval(gallery.next_image, 3000);
};




// Hide modal
$('body').on('click', ".gallery__screen", gallery.close_modal)
         .on('click', ".gallery__close", gallery.close_modal)
         .on('keypress', function(e) {
  if (e.keyCode === 27) {gallery.close_modal();}
});





// Show modal and prepare data
$(".gallery").on("click", ".gallery__link", function(e) {
  e.preventDefault();

  var el = $(this),
    project_name = $.trim($(e.currentTarget).find('.four-up__caption-hidden').text()),
    photo_urls = project_photos[project_name],
    img = $('<img>'),
    loc = el.parent().data('location'),
    footprint = el.parent().data('footprint'),
    duration = el.parent().data('duration'),
    first_image = encodeURI(document.location.origin+photo_urls[0]);
  
  // prepare the text content
  txt_content = gallery.prepare_text_content(project_name, loc, footprint, duration);

  // Add the first photo
  $('.gallery__photobox').css('background-image', "url("+first_image+")");
  
  // Checking for additional photos
  photo_content = gallery.prepare_photo_content(photo_urls);

  $(".gallery__photo").first().addClass('is-current');

  gallery.start_timer();


  // Add the text content
  $('.gallery__detail').html(txt_content);

  // position the modal
  $('.gallery__modal').css("top", window.scrollY - 420);

  $('body').addClass('gallery--open');

});

