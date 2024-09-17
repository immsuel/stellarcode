jQuery( document ).ready(function() {
  // ================== START HEADER JS HERE ======================= //
    var c, currentScrollTop = 0,
    navbar = jQuery('.artonest_header');
      jQuery(window).scroll(function () {
          var a = jQuery(window).scrollTop();
          var b = navbar.height();
          var scroll = jQuery(window).scrollTop();
          currentScrollTop = a;
          if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
          } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
          }
          c = currentScrollTop;
          if (scroll >= 250) {
              jQuery(".artonest_header").addClass("artonest_header_sticky");
          } else {
              jQuery(".artonest_header").removeClass("artonest_header_sticky");
          }
      });
      jQuery(".hrc_rc_ma a, .hrc_overlay").click(function () {
        jQuery(".hrc_right_col").toggleClass("active_menu");
        jQuery("body").toggleClass("body_active_menu");
      });
  // ================== END HEADER JS HERE ======================= //

  jQuery(".open_service").click(function () {
    jQuery(".main_service_menu").addClass("active_main_service_menu");
    jQuery("body").addClass("body_active_menu");
  });

  jQuery(".service_menu_overlay, .smt_tc_right button").click(function () {
    jQuery(".main_service_menu").removeClass("active_main_service_menu");
    jQuery(".hrc_right_col").removeClass("active_menu");
    jQuery("body").removeClass("body_active_menu");
  });

  // ================== START FOOTER JS HERE ====================== //
    function headerspace() {
      var headerHeight = jQuery('.artonest_footer').outerHeight();
      jQuery('.wrapper').css("margin-bottom", headerHeight);
    }
    headerspace();
        jQuery(window).on('resize orientationchange', function () {
        headerspace();
    });
    jQuery('.tbf_right_col a').on("click",function(){
        jQuery(window).scrollTop(0);
    });
  // ================== END FOOTER JS HERE ====================== //
  
  // ================== START PROTFOLIO JS HERE ================ //
    var ProtfolioRow = new Swiper('.protfolio_row', {
      slidesPerView: 1,
      centeredSlides: true,
      Infinity:true,
      loop: true,
      spaceBetween: 0,
      loopAdditionalSlides: 10,
      speed:200,
      navigation: {
        nextEl: '.protfolio_button_next',
        prevEl: '.protfolio_button_prev',
      },
    });
  // ================ END PROTFOLIO JS HERE ================= //
  // =============== START ABOUT HERO JS HERE =============== //
    var AHBCC = new Swiper('.ahb_cc_slider', {
      loop: true,
      watchSlidesProgress: true,
      effect: 'fade',
      pagination: {
        el: '.ahb_cc_pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
    });
    document.addEventListener('mouseenter', event => {
      const el = event.target;
      if (el && el.matches && el.matches('.swiper-container')) {
        el.AHBCC.autoplay.stop();
        el.classList.add('swiper-paused');          
        const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
        activeNavItem.style.animationPlayState="paused";
      }
    }, true);
  // =============== END ABOUT HERO SECTION HERE =============== //
  // =============== START MOMENT SECTION HERE =============== //
    var MomentsSlider = new Swiper('.moments_slider', {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      keyboardControl: false,
      mousewheelControl: false,
      allowTouchMove: false,
      Infinity:true,
      speed: 11000,
      direction: 'horizontal',
      centeredSlides: true,
      autoplay: {
        delay: 0.5,
        disableOnInteraction: true,
      }
    });
  // =============== END MOMENT SECTION HERE =============== //
  // =============== START MORE CASE STUDY SECTION HERE =============== //
  var CaseStudySwiper = new Swiper('.case_study_swiper', {
    loop: true,
    slidesPerView:4,
    Infinity:true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
    },
  });
  // =============== END MORE CASE STUDY SECTION HERE =============== //
  // =============== START RECENT PROJECT SECTION HERE =============== //
  function updSwiperNumericPagination() {
    this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + "</span>";
  }
  $(".recent_project_slider").each(function() {
    this.slidesQuantity = this.querySelectorAll(".recent_project_slide").length;
    new Swiper(this, {
      centeredSlides: true,
      Infinity:true,
      loop: true,
      loopAdditionalSlides: 10,
      on: {
        init: updSwiperNumericPagination,
        slideChange: updSwiperNumericPagination
      }
    });
  });
  var mySwiper = new Swiper('.recent_project_slider ', {
    slidesPerView: 1,
  });
  // =============== END RECENT PROJECT SECTION HERE =============== //
  // =============== START PARTNER SLIDER SECTION HERE =============== //
  var PartnerSlider = new Swiper('.partner_slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    keyboardControl: false,
    mousewheelControl: false,
    allowTouchMove: false,
    Infinity:true,
    speed: 3000,
    direction: 'horizontal',
    centeredSlides: true,
    loopAdditionalSlides: 5,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    }
  });
  // =============== END PARTNER SLIDER SECTION HERE =============== //
  // ================== START AOS JS HERE ======================= //
    AOS.init();
  // ================== END AOS JS HERE ======================= //
 });