/**
* Template Name: Vesperr - v3.0.3
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

!(function ($) {
    "use strict";
  
    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 15;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });

    //Counter

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset;
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
        }
      }
    });
  
    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  
  
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop() + 200;
  
      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      });
    });
  
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
  
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
  
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        900: {
          items: 2
        }
      }
    });
  
    // Porfolio isotope and filter
    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
  
      $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
  
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
        aos_init();
      });
  
      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    });
  
    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    }
    $(window).on('load', function () {
      aos_init();
    });
  
  
  })(jQuery);
  
  $(document).ready(function () {
    //Preloader
    setTimeout(function () {
      $('.preloader').fadeOut(500);
    }, 4800);
  });
  
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  //Typewriter
  
  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #631C6F}";
    document.body.appendChild(css);
  };
  // tfd

/*=====================================
      Partners Carousel
======================================*/
$('.partners-slider').owlCarousel({
  items: 4,
  autoplay: false,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  slideBy: 1,
  mouseDrag:false,
  loop: false,
  margin: 30,
  dots: false,
  nav: false,
  responsive: {
      1200: {
          items: 4,
          touchDrag:false,
          mouseDrag:false,
      },
      768: {
          items: 3,
          touchDrag:false,
          mouseDrag:false,
      },
      480: {
          items: 2,
          touchDrag:true,
          mouseDrag:true,
      },
      320: {
          items: 1,
          touchDrag:true,
          mouseDrag:true,
      },
  }
});

/*========================================
Blog Slick Carousel Vertical
===========================================*/
$(document).ready(function(){

  if ($(".slider-detail").length) {
      $('.slider-detail').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          active: true,
          // fade: true,
          asNavFor: '.slider-img'
      });
  }

  if ($(".slider-img").length) {
      $('.slider-img').slick({
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.slider-detail',
          dots: false,
          arrows: false,
          focusOnSelect: true,
      });
  }


  $('#blog-circle-left').click(function(){
      $('.slider-img').slick('slickNext');
  });
  $('#blog-circle-right').click(function(){
      $('.slider-img').slick('slickPrev');
  });



});

    /* ===================================
      WOW Animation
   ====================================== */

   if ($(window).width() > 991) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

jQuery(window).on("load", function () {
  "use strict";

  /*  ===================================
   Loading Timeout
   ====================================== */
  $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
  "use strict";

  var $window = $(window);
  var windowsize = $(window).width();

  /* ===================================
     Nav Scroll
     ====================================== */

  $(".scroll").on("click", function(event){
      event.preventDefault();
      $('html,body').animate({
          scrollTop: $(this.hash).offset().top - 40}, 1100);
  });


  /* =====================================
     Wow
     ======================================== */

  if ($(window).width() > 767) {
      var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: false,
          live: true
      });
      new WOW().init();
  }

  /* ===================================
      Animated Cursor
     ====================================== */

  function animatedCursor() {

      if ($("#animated-cursor").length) {

          var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
              i = document.getElementById("cursor-loader");
          TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
              var n = window.pageYOffset || document.documentElement.scrollTop;
              e.x = t.pageX, e.y = t.pageY - n
          }), TweenLite.ticker.addEventListener("tick", function () {
              o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
          }),
              $(".animated-wrap").mouseenter(function (e) {
                  let scalen = 2;
                  //for big icons scale more
                  if($(this).hasClass('big')){
                      scalen = 3.6;
                  }

                  TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                      scale: scalen,
                      borderWidth: "1px",
                      opacity: .2
                  }), TweenMax.to(i, .3, {
                      scale: 2,
                      borderWidth: "1px",
                      top: 1,
                      left: 1
                  }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0

              }),
              $(".animated-wrap").mouseleave(function (e) {
                  TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                      scale: 1,
                      borderWidth: "2px",
                      opacity: 1
                  }), TweenMax.to(i, .3, {
                      scale: 1,
                      borderWidth: "2px",
                      top: 0,
                      left: 0
                  }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
              }),

              $(".testimonial-images .animated-wrap").mouseenter(function (e) {
                  TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                      scale: 2,
                      borderWidth: "1px",
                      opacity: .2
                  }), TweenMax.to(i, .3, {
                      scale: 2,
                      borderWidth: "1px",
                      top: 1,
                      left: 1
                  }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
              }),

              $(".animated-wrap").mousemove(function (e) {
                  var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                  n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                      x: t.x,
                      y: t.y
                  }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                      x: (w - u.width / 2) / u.width * x,
                      y: (f - u.height / 2 - m) / u.height * x,
                      ease: Power2.easeOut
                  })
              }),
              $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                  TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
              }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
              TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
          }),$(".link").mouseenter(function (e) {
              TweenMax.to("#cursor", .2, {
                  borderWidth: "0px",
                  scale: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.27)",
                  opacity: .15
              })
          }), $(".link").mouseleave(function (e) {
              TweenMax.to("#cursor", .3, {
                  borderWidth: "2px",
                  scale: 1,
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  opacity: 1
              })
          })

      }

  }

  if ($(window).width() > 991) {
      setTimeout(function () {
          animatedCursor();
      }, 1000);
  }
//open model
  $('#open').on("click",function () {
      $('#animatedModal').addClass('active');
  });
//close model
  $('.close').on("click",function () {
      fadeOutModel();
  });
  $(document).on('keyup' , function (e) {
      if(e.keyCode === 27 && $('#animatedModal').hasClass('active')){
          fadeOutModel();
      }
  });


  function fadeOutModel(){
      setTimeout(function () {
          $('#animatedModal').addClass('hide');
      },20);
      setTimeout(function () {
          $('#animatedModal').removeClass('active hide');
      },300);
  }

  function resetModel(){
      $('.form-control').val('');
  }


  /* ===================================
     Rotating Text
     ====================================== */
  if($(window).width() > 778){
      $("#js-rotating").Morphext({
          // The [in] animation type. Refer to Animate.css for a list of available animations.
          animation: "flipInX",
          // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
          separator: ",",
          // The delay between the changing of each phrase in milliseconds.
          speed: 3000,
          complete: function () {
              // Called after the entrance animation is executed.
          }
      });
  }
  else {
      let txt = $("#js-rotating").text();
      txt = txt.split(',');
      $("#js-rotating").text(txt[0]);
  }



  //form validation

  let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  $('#modelForm').on('submit', function (e) {
      e.preventDefault();
      let input = $('.form-control');
      console.log(input);

      input.each(function () {
          let value = $(this).val();
          if (!value.length){
              let elm= $(this);
              elm.addClass('error animate');
              setTimeout(function () {
                  elm.removeClass('animate')
              },400);
          }
          else if($(this).attr('data-email')=== 'true' && !regexp.test($(this).val())){
              let elm= $(this);
              elm.addClass('error animate');
              setTimeout(function () {
                  elm.removeClass('animate')
              },400);
          }
          else {
              let elm= $(this);
              elm.removeClass('error');
          }
      });
      if(!input.hasClass('error')){
          $('#thanks-text span').text($('#quote_name').val());
          $("#thanks").fadeIn().addClass('active');
          fadeOutModel();
          resetModel();
      }
  });
  $('#thanks-close').on('click',function () {
      $("#thanks").fadeOut().removeClass('active');
  });

  $('.form-control').each(function () {
      $(this).on('input', function () {
          if($(this).attr('data-email')=== 'true' && regexp.test($(this).val())){
              $(this).removeClass('error');
          }
          else if($(this).attr('data-email')!== 'true' && $(this).val().length>1){
              $(this).removeClass('error');
          }
          else {
              $(this).addClass('error');
          }
      });
  });

  /* ===================================
     Revolution Slider
     ====================================== */

  /*Design Studio*/
  $("#rev_slider_8_1").show().revolution({
      sliderType:"standard",
      jsFileLocation:"vendor/js/",
      sliderLayout:"fullscreen",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"on",
          touch:{
              touchenabled:"on",
              touchOnDesktop:"off",
              swipe_threshold: 75,
              swipe_min_touches: 50,
              swipe_direction: "horizontal",
              drag_block_vertical: false
          }
          ,
          arrows: {
              style:"uranus",
              enable:false,
              hide_onmobile:true,
              hide_under:600,
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              tmp:'<div class="hvr-pulse"></div>',
              left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:30,
                  v_offset:0
              },
              right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:30,
                  v_offset:0
              }
          }
          ,
          bullets: {
              enable:false,
              hide_onmobile:true,
              hide_under:600,
              style:"hephaistos",
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              direction:"horizontal",
              h_align:"center",
              v_align:"bottom",
              h_offset:0,
              v_offset:30,
              space:5,
              tmp:''
          }
      },
      responsiveLevels: [4096, 1024, 778, 480],
      visibilityLevels: [4096, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType:"smart",
      parallax: {
          type:"mouse",
          origo:"slidercenter",
          speed:2000,
          speedbg:0,
          speedls:0,
          levels:[2,3,4,5,6,7,12,16,10,50,10,11,12,13,14,55],
      },
      shadow:0,
      spinner:"off",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      fullScreenAutoWidth:"off",
      fullScreenAlignForce:"off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
      }
  });
});