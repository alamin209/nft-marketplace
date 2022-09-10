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

  // owlCarousel trending
jQuery(document).ready(function($) {
  "use strict";
  $('#trending').owlCarousel( {
      loop: true,
      center: true,
      items: 3,
      margin: 20,
      autoplay: false,
      dots:true,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: [''],
      responsive: {
        0: {
          items: 1
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
    // owlCarousel Hot Item
jQuery(document).ready(function($) {
  "use strict";
  $('#hot_item').owlCarousel( {
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
          items: 2
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
      // owlCarousel Live Auctions
jQuery(document).ready(function($) {
  "use strict";
  $('#live_auctions').owlCarousel( {
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
          items: 2
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