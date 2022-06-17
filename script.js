$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    center: true,
    loop: false,
    margin: -310,
    slideTransition: 'ease-in-out',
    responsive: {
      0 : {
        items: 1, 
        loop: false,
        margin: 10
      },
      600 : {
        margin: -300
      }
    }
  });


  var owl = $('.owl-carousel');
  owl.owlCarousel();

  function secondSlide() {
    owl.trigger('next.owl.carousel');
  };

  secondSlide();
});

