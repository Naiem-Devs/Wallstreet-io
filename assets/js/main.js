(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overflow-hidden');  
  }); 
  
 // menu 
 $('.rd__btn').click( function (event){ 
    $('.resource__dropdown').toggleClass('show');  
  }); 


  // owlCarousel
  $(".Reviews-slider").owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        stagePadding: 10,
        items: 2
      },
      992: {
        items: 2
      },
      1300: {
        stagePadding: 150,
        items: 3
      }
    }
  });


  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
