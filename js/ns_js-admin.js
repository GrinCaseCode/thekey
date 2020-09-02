$(document).ready(function() {

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



});
