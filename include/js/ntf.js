// owlCarousel
jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel( {
      loop: true,
      center: true,
      items: 3,
      margin: 10,
      autoplay: false,
      dots:true,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: [''],
      responsive: {
        0: {
          items: 3
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  });