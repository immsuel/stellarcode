//jQuery(window).on('load', function(){ 
	//preloader
	//jQuery('#preload').delay(350).fadeOut('slow');
	// end_preloader
  //});

jQuery(document).ready(function($){

	// Start Stiky Header
	$(window).scroll(function() {
		var sticky = $('.site-header'),
		scroll = $(window).scrollTop();
			if (scroll >= 400) { 
			  sticky.addClass('sticky-header'); }
			else { 
			  sticky.removeClass('sticky-header');
			}
		});
	//End Stiky Header

	
// satart gallery slider
	$('.gallery-slider').slick({
         centerMode: true,
        padding: '60px',
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
// End gallery slider

/// Start  service Slider
    $('#service-gallery').slick({
		dots: false,
		centerMode: true,
		infinite: true,
		centerPadding: '30%',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed: 3500,
		prevArrow: false,
		nextArrow: false,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerPadding: '10%',
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 3500,
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerPadding: '10%',
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: false,
			  autoplaySpeed: 3500,
			}
		  }
		]
	  });
// End service Slider

/// Start  service Slider
$('#gallery-mobile').slick({
	dots: false,
	infinite: false,
	padding: '60px',
	slidesToShow: 2.5,
	slidesToScroll: 2,
	autoplay:false,
	autoplaySpeed: 3500,
	prevArrow: false,
	nextArrow: false,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3500,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3500,
		}
	  }
	]
  });
// End service Slider

	$(window).on("scroll", function () {
		AOS.init();
  	});

	// aos_animation
    AOS.init({
		offset: 100,
		duration: 1000,
		easing: 'ease',
		once: false,
		throttleDelay: 0,
	});

 
gsap.registerPlugin(ScrollTrigger);

	let abvert = gsap.timeline();
	abvert.to('#gallery', {
	  xPercent:-175,
	  scrollTrigger:{
	    trigger:"body",
	    scrub:5
	  }
	});

   // Sub Menu
//    $('#mobile-primary-menu .menu-item-has-children a').on('click', function (event) {
// 		event.preventDefault();
// 		let parent = $(this).parents().eq(1);
// 		if (parent.find('.sub-menu').hasClass('active')) {
// 			parent.find('.sub-menu').removeClass('active').slideUp('slow');
// 			parent.removeClass('active');
// 		} else {
// 			parent.find('.sub-menu').addClass('active').slideDown('slow');
// 			parent.addClass('active');
// 		}
// 	});
  // End Sub Menu

  //Start Navigate to top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
		$('#back-to-top').fadeIn();
		} else {
		$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
		scrollTop: 0
		}, 400);
		return false;
	});
	//End Navigate to top

});