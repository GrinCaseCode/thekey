$(document).ready(function() {
				// Slick Selector.
				var slickSlider2 = $('.ns_slider-modal');
				var maxDots2 = 5;
				var transformXIntervalNext2 = -18;
				var transformXIntervalPrev2 = 18;

				slickSlider2.on('init', function (event, slick) {
					$(this).find('ul.slick-dots').wrap("<div class='ns_slick-dots-container'></div>");
					$(this).find('ul.slick-dots li').each(function (index) {
						$(this).addClass('dot-index-' + index);
					});
					$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
					setBoundries($(this),'default');
				});

				var transformCount2 = 0;
				slickSlider2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					var totalCount2 = $(this).find('.slick-dots li').length;
					if (totalCount2 > maxDots2) {
						if (nextSlide > currentSlide) {
							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
								if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
									transformCount2 = transformCount2 + transformXIntervalNext2;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
									var nextSlidePlusOne2 = nextSlide + 1;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne2).addClass('n-small-1');
									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount2 + 'px)');
									var pPointer2 = nextSlide - 3;
									var pPointer2MinusOne = pPointer2 - 1;
									$(this).find('ul.slick-dots li').eq(pPointer2MinusOne).removeClass('p-small-1');
									$(this).find('ul.slick-dots li').eq(pPointer2).addClass('p-small-1');
								}
							}
						}
						else {
							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
								if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
									transformCount2 = transformCount2 + transformXIntervalPrev2;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
									var nextSlidePlusOne2 = nextSlide - 1;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne2).addClass('p-small-1');
									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount2 + 'px)');
									var nPointer2 = currentSlide + 3;
									var nPointer2MinusOne = nPointer2 - 1;
									$(this).find('ul.slick-dots li').eq(nPointer2).removeClass('n-small-1');
									$(this).find('ul.slick-dots li').eq(nPointer2MinusOne).addClass('n-small-1');
								}
							}
						}
					}
				});

				var $slider = $('.ns_slider-modal');

				if ($slider.length) {
					var currentSlide;
					var slidesCount;
					var sliderCounter = document.createElement('div');
					sliderCounter.classList.add('ns_slider-counter__numbers');

					var updateSliderCounter = function(slick, currentIndex) {
						currentSlide = slick.slickCurrentSlide() + 1;
						slidesCount = slick.slideCount;
						$(sliderCounter).html('<span>0'+currentSlide + '</span>/' +'0'+slidesCount+ '')
					};

					$slider.on('init', function(event, slick) {
						$('.ns_slider-counter').append(sliderCounter);
						updateSliderCounter(slick);
						$(".ns_slider-counter__number").text("0" + slick.slideCount);
					});

					$slider.on('afterChange', function(event, slick, currentSlide) {
						updateSliderCounter(slick, currentSlide);
					});


				}

				$slider.not(".slick-initialized").slick({
					arrows: true,
					dots: true,
					infinite: false,
					slidesToShow: 1,
					focusOnSelect: true,
					touchThreshold: 1000,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1200,
						settings: {
							arrows: false,
						}
					}
					]
				});
				$('[data-fancybox]').fancybox({
					backFocus : false,
					loop: true,
					thumbs : {
						autoStart : true
					}
				});

				$('.fancybox').fancybox({
					helpers:  {
						overlay : {
							locked : false
						}
					},
					beforeShow: function(){
						setTimeout(function () {
							$('.ns_fancy-preloader').fadeOut();
						}, 500); 

						$slider.slick('setPosition');
					},
					afterShow: function(){
						$slider.slick('setPosition');
					},
					afterClose: function () {
						setTimeout(function () {
							$('.ns_fancy-preloader').fadeIn();
						}, 500); 
					}
				});



				$(".ns_item-dropdown__input").click(function() {
					$(".ns_item-dropdown__input").not(this).removeClass("ns_active");
					if ($(this).hasClass("ns_active")) {
						$(this).removeClass("ns_active");
					} else {
						$(this).addClass("ns_active");
					}
				});

				$(document).mouseup(function (e){ 
					var div = $(".ns_item-dropdown"); 
					if (!div.is(e.target) 
						&& div.has(e.target).length === 0) { 
						$(".ns_item-dropdown__input").removeClass("ns_active");
				}
			});

				$('.ns_item-dropdown__list li').click(function(){
					var tx = $(this).html();
					$(this).parent().find("li").removeClass("ns_active");
					$(this).parent().parent().siblings(".ns_item-dropdown__input").html(tx);
					$(this).parent().parent().siblings(".ns_item-dropdown__input").removeClass("ns_active");
					if ($(this).hasClass("ns_active")) {

					} else {
						$(this).addClass("ns_active");
					}
				});

				$(".ns_types-widget li a").click(function(e) {
					e.preventDefault();
					$(".ns_types-widget li").removeClass("ns_active");
					if ($(this).parent().hasClass("ns_active")) {

					} else {
						$(this).parent().addClass("ns_active");
					}
				});

				$(".ns_widget-item .ns_item-dropdown_color .ns_item-dropdown__list li").click(function() {
					var data_color = $(this).attr( "data-color" ); 
					$("body").attr( "class",  data_color); 
				});

				$(".ns_widget-item .ns_item-dropdown_size .ns_item-dropdown__list li").click(function() {
					var data_size = $(this).attr( "data-size" ); 
					$("body").attr( "data-size",  data_size); 
				});

				

				function setBoundries(slick, state) {
					if (state === 'default') {
						slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
					}
				}

	// Slick Selector.
	var slickSlider = $('.ns_slider-cards');
	var maxDots = 5;
	var transformXIntervalNext = -18;
	var transformXIntervalPrev = 18;

	slickSlider.on('init', function (event, slick) {
		$(this).find('ul.slick-dots').wrap("<div class='ns_slick-dots-container'></div>");
		$(this).find('ul.slick-dots li').each(function (index) {
			$(this).addClass('dot-index-' + index);
		});
		$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
		setBoundries($(this),'default');
	});

	var transformCount = 0;
	slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var totalCount = $(this).find('.slick-dots li').length;
		if (totalCount > maxDots) {
			if (nextSlide > currentSlide) {
				if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
					if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
						transformCount = transformCount + transformXIntervalNext;
						$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
						var nextSlidePlusOne = nextSlide + 1;
						$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
						$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
						var pPointer = nextSlide - 3;
						var pPointerMinusOne = pPointer - 1;
						$(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
						$(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
					}
				}
			}
			else {
				if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
					if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
						transformCount = transformCount + transformXIntervalPrev;
						$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
						var nextSlidePlusOne = nextSlide - 1;
						$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
						$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
						var nPointer = currentSlide + 3;
						var nPointerMinusOne = nPointer - 1;
						$(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
						$(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
					}
				}
			}
		}
	});



	$('.ns_slider-cards').slick({
		arrows: true,
		dots: true,
		infinite: false,
		slidesToShow: 3,
		focusOnSelect: true,
		touchThreshold: 1000,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}
		]
	});

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

  $(".ns_tabs li a").click(function(event) {
  	event.preventDefault();
  	$(".ns_tabs li").removeClass('ns_active');
  	$(this).parent().addClass('ns_active');
  	$(".ns_tab-pane").fadeOut(0);
  	var selectTab = $(this).attr("href");
  	$(selectTab).fadeIn(200);
  });

  var $location = $(".ns_location-bottom");
  $(window).scroll(function(){
  	if ( $(this).scrollTop() > 150 && $location.hasClass("default") ){
  		$location.removeClass("default").addClass("ns_fixed");
  	} else if($(this).scrollTop() <= 150 && $location.hasClass("ns_fixed")) {
  		$location.removeClass("ns_fixed").addClass("default");
  	}
  });

	 // стайлер для select
	 $('select').styler();

	 $(".ns_btn-top").click(function () {
	 	$("body, html").animate({
	 		scrollTop: 0
	 	}, 800);
	 	return false;
	 });

	 objectFitImages();


	});
/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
