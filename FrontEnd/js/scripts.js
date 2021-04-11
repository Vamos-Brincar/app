/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

    // Get the modal
    var modal = document.getElementById('gamebox');

    // Get the button that opens the modal
    var btn = document.getElementById("playgame");



    // When the user clicks the button, open the modal 
    btn.onclick = function() {
<<<<<<< HEAD
        modal.style.display = "block";  
=======
        modal.style.display = "block";
     
        
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2cd7b5dab399c8f7a5e6a571c2ae68db6cacae1f
=======
>>>>>>> 2cd7b5dab399c8f7a5e6a571c2ae68db6cacae1f
=======
>>>>>>> 2cd7b5dab399c8f7a5e6a571c2ae68db6cacae1f
    }

    var gamebox = document.getElementById("close");

    gamebox.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        }
    }
=======
=======
>>>>>>> 2cd7b5dab399c8f7a5e6a571c2ae68db6cacae1f
=======
>>>>>>> 2cd7b5dab399c8f7a5e6a571c2ae68db6cacae1f
            
          



>>>>>>> 2cd7b5dab399c8f7a5e6a571c2ae68db6cacae1f
  })(jQuery); // End of use strict
  