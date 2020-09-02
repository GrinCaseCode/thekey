$(document).ready(function() {

 // Slick Selector.
 var slickSlider3 = $('.ns_slider-location');
 var maxDots3 = 5;
 var transformXIntervalNext3 = -18;
 var transformXIntervalPrev3 = 18;

 slickSlider3.on('init', function (event, slick) {
 	$(this).find('ul.slick-dots').wrap("<div class='ns_slick-dots-container'></div>");
 	$(this).find('ul.slick-dots li').each(function (index) {
 		$(this).addClass('dot-index-' + index);
 	});
 	$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
 	setBoundries($(this),'default');
 });

 var transformCount3 = 0;
 slickSlider3.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var totalCount3 = $(this).find('.slick-dots li').length;
 	if (totalCount3 > maxDots3) {
 		if (nextSlide > currentSlide) {
 			if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
 				if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
 					transformCount3 = transformCount3 + transformXIntervalNext3;
 					$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
 					var nextSlidePlusOne3 = nextSlide + 1;
 					$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne3).addClass('n-small-1');
 					$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount3 + 'px)');
 					var pPointer3 = nextSlide - 3;
 					var pPointer3MinusOne = pPointer3 - 1;
 					$(this).find('ul.slick-dots li').eq(pPointer3MinusOne).removeClass('p-small-1');
 					$(this).find('ul.slick-dots li').eq(pPointer3).addClass('p-small-1');
 				}
 			}
 		}
 		else {
 			if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
 				if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
 					transformCount3 = transformCount3 + transformXIntervalPrev3;
 					$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
 					var nextSlidePlusOne3 = nextSlide - 1;
 					$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne3).addClass('p-small-1');
 					$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount3 + 'px)');
 					var nPointer3 = currentSlide + 3;
 					var nPointer3MinusOne = nPointer3 - 1;
 					$(this).find('ul.slick-dots li').eq(nPointer3).removeClass('n-small-1');
 					$(this).find('ul.slick-dots li').eq(nPointer3MinusOne).addClass('n-small-1');
 				}
 			}
 		}
 	}
 });

 function setBoundries(slick, state) {
 	if (state === 'default') {
 		slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
 	}
 }

 $('.ns_slider-location').slick({
 	arrows: true,
 	dots: true,
 	infinite: false,
 	slidesToShow: 1,
 	focusOnSelect: true,
 	touchThreshold: 1000,
 	slidesToScroll: 1,
 });


  // Slick Selector.
  var slickSlider4 = $('.ns_slider-tabs');
  var maxDots4 = 5;
  var transformXIntervalNext4 = -18;
  var transformXIntervalPrev4 = 18;

  slickSlider4.on('init', function (event, slick) {
  	$(this).find('ul.slick-dots').wrap("<div class='ns_slick-dots-container'></div>");
  	$(this).find('ul.slick-dots li').each(function (index) {
  		$(this).addClass('dot-index-' + index);
  	});
  	$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
  	setBoundries($(this),'default');
  });

  var transformCount4 = 0;
  slickSlider4.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  	var totalCount4 = $(this).find('.slick-dots li').length;
  	if (totalCount4 > maxDots4) {
  		if (nextSlide > currentSlide) {
  			if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
  				if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
  					transformCount4 = transformCount4 + transformXIntervalNext4;
  					$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
  					var nextSlidePlusOne4 = nextSlide + 1;
  					$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne4).addClass('n-small-1');
  					$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount4 + 'px)');
  					var pPointer4 = nextSlide - 3;
  					var pPointer4MinusOne = pPointer4 - 1;
  					$(this).find('ul.slick-dots li').eq(pPointer4MinusOne).removeClass('p-small-1');
  					$(this).find('ul.slick-dots li').eq(pPointer4).addClass('p-small-1');
  				}
  			}
  		}
  		else {
  			if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
  				if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
  					transformCount4 = transformCount4 + transformXIntervalPrev4;
  					$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
  					var nextSlidePlusOne4 = nextSlide - 1;
  					$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne4).addClass('p-small-1');
  					$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount4 + 'px)');
  					var nPointer4 = currentSlide + 3;
  					var nPointer4MinusOne = nPointer4 - 1;
  					$(this).find('ul.slick-dots li').eq(nPointer4).removeClass('n-small-1');
  					$(this).find('ul.slick-dots li').eq(nPointer4MinusOne).addClass('n-small-1');
  				}
  			}
  		}
  	}
  });

  $('.ns_slider-tabs').slick({
  	arrows: false,
  	dots: true,
  	infinite: false,
  	slidesToShow: 1,
  	focusOnSelect: true,
  	touchThreshold: 1000,
  	slidesToScroll: 1,
  });

  /*tabs*/


  $(".ns_tabs li a").click(function(event) {
  	event.preventDefault();
  	$(".ns_tabs li").removeClass('ns_active');
  	$(this).parent().addClass('ns_active');
  	$(".ns_tab-pane").fadeOut(0);
  	var selectTab = $(this).attr("href");
  	$(selectTab).fadeIn(200);
  });

  $(".ns_layout-numbers__wrap").click(function(event) {
  	event.preventDefault();
  	$(".ns_layout-numbers__wrap").removeClass('ns_active');
  	$(this).addClass('ns_active');
  	$(".ns_layout-block__pane").fadeOut(0);
  	var selectTab2 = $(this).find("a").attr("href");
  	$(selectTab2).fadeIn(200);
  });
  $(".ns_layout-numbers__item").click(function(event) {
  	event.preventDefault();
  });


  /*location*/

  var $location = $(".ns_location-bottom");
  $(window).scroll(function(){
  	if ( $(this).scrollTop() > 150 && $location.hasClass("default") ){
  		$location.removeClass("default").addClass("ns_fixed");
  	} else if($(this).scrollTop() <= 150 && $location.hasClass("ns_fixed")) {
  		$location.removeClass("ns_fixed").addClass("default");
  	}
  });


  /*more*/

  $("#link-more-locations").click(function (e) {
  	if ($(".list-mobile-checkbox li").is(":hidden")) {
  		$(".list-mobile-checkbox li").slideDown(200);
  	} else {

  		$(".list-mobile-checkbox li:nth-child(n+4)").slideUp(200);
  	}
  });

  /*layout numbers*/
  $('.ns_layout-numbers__btn').click(function() {
  	$('.ns_layout-numbers').addClass("ns_layout-numbers_mob")
  	if ($(".ns_layout-numbers__wrap:not('.ns_active')").is(":hidden")) {
  		$(".ns_layout-numbers__wrap:not('.ns_active')").fadeIn(200);
  	} else {
  		$(".ns_layout-numbers__wrap:not('.ns_active')").fadeOut(200);
  	}
  	$('.ns_layout-numbers__wrap').click(function() {
  		$(".ns_layout-numbers_mob .ns_layout-numbers__wrap:not('.ns_active')").fadeOut(200);
  	});
  });

  /*menu filter map*/


  $(".ns_btn-top").click(function () {
  	$("body, html").animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });


});
