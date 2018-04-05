$(document).ready(function(){
      $('.slider1').slick({
      	arrows: false,
      	dots: true,
      	autoplay: true,
      	swipe: false
              });
    });


$('.main__stock-slider__wrapper').slick({
  centerMode: true,
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        centerMode: true
      }
    }
  ]
});

$('.slider_fade').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear'
});



$(document).ready(function () {
  $('.burgermenu__button').click(function () {
    $('.humburger__menu').slideToggle();
  })
});
