
$('.hamburger').on('click', function(){
  $('header nav').animate({
    right:0
  });
});

$('.close-nav').on('click', function(){
  $('header nav').animate({
    right:'100%'
  });
});


$(window).on('resize', function(){
  if ($(window).width() >= 580) {
    $('header nav').removeAttr('style');
  }
});

// // reveal from the top (CSS: the nav must be set to display:none to work)
// $('.hamburger').on('click', function(){
//   $('header nav').slideDown();
// });

// $('.close-nav').on('click', function(){
//   $('header nav').slideUp();
// });