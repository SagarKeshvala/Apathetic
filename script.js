$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    center: true,
    loop: false,
    margin: -310
  });


  var owl = $('.owl-carousel');
  owl.owlCarousel();

  function secondSlide() {
    owl.trigger('next.owl.carousel');
  };

  secondSlide();
});

