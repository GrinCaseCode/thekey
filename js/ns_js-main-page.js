$(document).ready(function() {

	/*input*/

	$('.ns_rfield').keyup(function(){
		if($(this).val() != ''){
			$(this).parent().addClass('ns_active');
		} else {
			$(this).parent().removeClass('ns_active');
		}
	});
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


				function setBoundries(slick, state) {
					if (state === 'default') {
						slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
					}
				}


				/*range slider*/
				$('.ns_range_price').each(function(){
					var $this = $(this),
					$range = $(".ns_range__input", $this),
					$from = $(".ns_control-input__from", $this),
					$to = $(".ns_control-input__to", $this),
					min = 0,
					max = 3000000;

					$range.ionRangeSlider({
						type: "double",
						min: min,
						max: max,
						from: 70000,
						to: 3000000,
						prettify_enabled: true,
						onChange: function(data) {
							updateValues()
						}
					});

					function number_format(num, format) {
						num = (num + "").replace(/(\s)+/g, "");
						return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
					}
					$range = $range.data("ionRangeSlider");
					var updateValues = function() {
						var res = $range.result;
						$from.val(number_format(res.from, true));
						$to.val(number_format(res.to,true))
					};
					$from.on("focus", function() {
						this.value = number_format(this.value);
						this.focus();
						this.selectionStart = this.value.length
					}).on("input", function() {
						$range.update({
							from: this.value
						})
					}).on("blur", updateValues);
					$to.on("focus", function() {
						this.value = number_format(this.value);
						this.focus();
						this.selectionStart = this.value.length
					}).on("input", function() {
						$range.update({
							to: this.value
						})
					}).on("blur", updateValues)
				});

				$('.ns_range_area').each(function(){
					var $this2 = $(this),
					$range2 = $(".ns_range__input", $this2),
					$from2 = $(".ns_control-input__from", $this2),
					$to2 = $(".ns_control-input__to", $this2),
					min2 = 0,
					max2 = 500;

					$range2.ionRangeSlider({
						type: "double",
						min: min2,
						max: max2,
						from: 0,
						to: 190,
						prettify_enabled: true,
						onChange: function(data) {
							updateValues2()
						}
					});

					function number_format(num, format) {
						num = (num + "").replace(/(\s)+/g, "");
						return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
					}
					$range2 = $range2.data("ionRangeSlider");
					var updateValues2 = function() {
						var res = $range2.result;
						$from2.val(number_format(res.from, true));
						$to2.val(number_format(res.to,true))
					};
					$from2.on("focus", function() {
						this.value = number_format(this.value);
						this.focus();
						this.selectionStart = this.value.length
					}).on("input", function() {
						$range2.update({
							from: this.value
						})
					}).on("blur", updateValues2);
					$to2.on("focus", function() {
						this.value = number_format(this.value);
						this.focus();
						this.selectionStart = this.value.length
					}).on("input", function() {
						$range2.update({
							to: this.value
						})
					}).on("blur", updateValues2)
				});



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
				var slickSlider7 = $('.mobile-slider-map');
				var maxDots7 = 5;
				var transformXIntervalNext7 = -18;
				var transformXIntervalPrev7 = 18;

				slickSlider7.on('init', function (event, slick) {
					$(this).find('ul.slick-dots').wrap("<div class='ns_slick-dots-container'></div>");
					$(this).find('ul.slick-dots li').each(function (index) {
						$(this).addClass('dot-index-' + index);
					});
					$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
					setBoundries($(this),'default');
				});

				var transformCount7 = 0;
				slickSlider7.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					var totalCount7 = $(this).find('.slick-dots li').length;
					if (totalCount7 > maxDots7) {
						if (nextSlide > currentSlide) {
							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
								if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
									transformCount7 = transformCount7 + transformXIntervalNext7;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
									var nextSlidePlusOne7 = nextSlide + 1;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne7).addClass('n-small-1');
									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount7 + 'px)');
									var pPointer7 = nextSlide - 3;
									var pPointer7MinusOne = pPointer7 - 1;
									$(this).find('ul.slick-dots li').eq(pPointer7MinusOne).removeClass('p-small-1');
									$(this).find('ul.slick-dots li').eq(pPointer7).addClass('p-small-1');
								}
							}
						}
						else {
							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
								if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
									transformCount7 = transformCount7 + transformXIntervalPrev7;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
									var nextSlidePlusOne7 = nextSlide - 1;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne7).addClass('p-small-1');
									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount7 + 'px)');
									var nPointer7 = currentSlide + 3;
									var nPointer7MinusOne = nPointer7 - 1;
									$(this).find('ul.slick-dots li').eq(nPointer7).removeClass('n-small-1');
									$(this).find('ul.slick-dots li').eq(nPointer7MinusOne).addClass('n-small-1');
								}
							}
						}
					}
				});
 $('.mobile-slider-map').slick({
 	arrows: false,
 	dots: true,
 	infinite: false,
 	slidesToShow: 1,
 	focusOnSelect: true,
 	variableWidth: true,
 	touchThreshold: 1000,
 	slidesToScroll: 1,
 });

 
  /*tabs*/



   $(".ns_tabs-bottom li a").click(function(event) {
  	event.preventDefault();
  	$(".ns_tabs-bottom li").removeClass('ns_active');
  	$(this).parent().addClass('ns_active');
  	$(".ns_tabs-pane-bottom").fadeOut(0);
  	var selectTab = $(this).attr("href");
  	$(selectTab).fadeIn(200);
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


	 $(".ns_btn-top").click(function () {
	 	$("body, html").animate({
	 		scrollTop: 0
	 	}, 800);
	 	return false;
	 });

	 $(".input-phone").mask("+7 (999) 999-9999");

	 objectFitImages();


	});
/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


/*maskjs*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(e){var f,d=navigator.userAgent,c=/iphone/i.test(d),a=/chrome/i.test(d),b=/android/i.test(d);e.mask={definitions:{"9":"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(i,g){var h;if(0!==this.length&&!this.is(":hidden")){return"number"==typeof i?(g="number"==typeof g?g:i,this.each(function(){this.setSelectionRange?this.setSelectionRange(i,g):this.createTextRange&&(h=this.createTextRange(),h.collapse(!0),h.moveEnd("character",g),h.moveStart("character",i),h.select())})):(this[0].setSelectionRange?(i=this[0].selectionStart,g=this[0].selectionEnd):document.selection&&document.selection.createRange&&(h=document.selection.createRange(),i=0-h.duplicate().moveStart("character",-100000),g=i+h.text.length),{begin:i,end:g})}},unmask:function(){return this.trigger("unmask")},mask:function(q,j){var n,k,h,i,p,g,l,o;if(!q&&this.length>0){n=e(this[0]);var m=n.data(e.mask.dataName);return m?m():void 0}return j=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},j),k=e.mask.definitions,h=[],i=l=q.length,p=null,e.each(q.split(""),function(r,s){"?"==s?(l--,i=r):k[s]?(h.push(new RegExp(k[s])),null===p&&(p=h.length-1),i>r&&(g=h.length-1)):h.push(null)}),this.trigger("unmask").each(function(){function r(){if(j.completed){for(var I=p;g>=I;I++){if(h[I]&&w[I]===E(I)){return}}j.completed.call(F)}}function E(I){return j.placeholder.charAt(I<j.placeholder.length?I:0)}function D(I){for(;++I<l&&!h[I];){}return I}function y(I){for(;--I>=0&&!h[I];){}return I}function v(L,I){var K,J;if(!(0>L)){for(K=L,J=D(I);l>K;K++){if(h[K]){if(!(l>J&&h[K].test(w[J]))){break}w[K]=w[J],w[J]=E(J),J=D(J)}}C(),F.caret(Math.max(p,L))}}function s(M){var K,L,I,J;for(K=M,L=E(M);l>K;K++){if(h[K]){if(I=D(K),J=w[K],w[K]=L,!(l>I&&h[I].test(J))){break}L=J}}}function A(){var I=F.val(),J=F.caret();if(o&&o.length&&o.length>I.length){for(u(!0);J.begin>0&&!h[J.begin-1];){J.begin--}if(0===J.begin){for(;J.begin<p&&!h[J.begin];){J.begin++}}F.caret(J.begin,J.begin)}else{for(u(!0);J.begin<l&&!h[J.begin];){J.begin++}F.caret(J.begin,J.begin)}r()}function x(){u(),F.val()!=H&&F.change()}function z(L){if(!F.prop("readonly")){var M,K,I,J=L.which||L.keyCode;o=F.val(),8===J||46===J||c&&127===J?(M=F.caret(),K=M.begin,I=M.end,I-K===0&&(K=46!==J?y(K):I=D(K-1),I=46===J?D(I):I),t(K,I),v(K,I-1),L.preventDefault()):13===J?x.call(this,L):27===J&&(F.val(H),F.caret(0,u()),L.preventDefault())}}function G(M){if(!F.prop("readonly")){var L,O,K,I=M.which||M.keyCode,N=F.caret();if(!(M.ctrlKey||M.altKey||M.metaKey||32>I)&&I&&13!==I){if(N.end-N.begin!==0&&(t(N.begin,N.end),v(N.begin,N.end-1)),L=D(N.begin-1),l>L&&(O=String.fromCharCode(I),h[L].test(O))){if(s(L),w[L]=O,C(),K=D(L),b){var J=function(){e.proxy(e.fn.caret,F,K)()};setTimeout(J,0)}else{F.caret(K)}N.begin<=g&&r()}M.preventDefault()}}}function t(K,I){var J;for(J=K;I>J&&l>J;J++){h[J]&&(w[J]=E(J))}}function C(){F.val(w.join(""))}function u(J){var I,N,M,L=F.val(),K=-1;for(I=0,M=0;l>I;I++){if(h[I]){for(w[I]=E(I);M++<L.length;){if(N=L.charAt(M-1),h[I].test(N)){w[I]=N,K=I;break}}if(M>L.length){t(I+1,l);break}}else{w[I]===L.charAt(M)&&M++,i>I&&(K=I)}}return J?C():i>K+1?j.autoclear||w.join("")===B?(F.val()&&F.val(""),t(0,l)):C():(C(),F.val(F.val().substring(0,K+1))),i?I:p}var F=e(this),w=e.map(q.split(""),function(J,I){return"?"!=J?k[J]?E(I):J:void 0}),B=w.join(""),H=F.val();F.data(e.mask.dataName,function(){return e.map(w,function(J,I){return h[I]&&J!=E(I)?J:null}).join("")}),F.one("unmask",function(){F.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!F.prop("readonly")){clearTimeout(f);var I;H=F.val(),I=u(),f=setTimeout(function(){F.get(0)===document.activeElement&&(C(),I==q.replace("?","").length?F.caret(0,I):F.caret(I))},10)}}).on("blur.mask",x).on("keydown.mask",z).on("keypress.mask",G).on("input.mask paste.mask",function(){F.prop("readonly")||setTimeout(function(){var I=u(!0);F.caret(I),r()},0)}),a&&b&&F.off("input.mask").on("input.mask",A),u()})}})});