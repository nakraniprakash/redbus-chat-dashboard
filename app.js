$(function() {

	$(window).on("scroll", function(e) {
		if ($(window).scrollTop() > 50) {
			$("body").addClass("sticky");
		} else {
			$("body").removeClass("sticky");
		}
	});

	$(document).on("click", function(e) {
		e.preventDefault();
		var $item = $(".rad-dropmenu-item");
		if ($item.hasClass("active")) {
			$item.removeClass("active");
		}
	});
	
	/*$('.rad-sidebar a').on("click", function(e) {
		e.stopPropagation();
	});*/

	$( "#datepicker_from" ).datepicker();
	$( "#datepicker_to" ).datepicker();
	$( "#datepicker_from_group" ).datepicker();
	$( "#datepicker_to_group" ).datepicker();


	$('.rad-chat-body').slimScroll({
		height: '450px',
		color: "#c6c6c6"
	});

	$('.rad-timeline-body').slimScroll({
		height: '450px',
		color: '#c6c6c6'
	});
	
	$('.rad-activity-body').slimScroll({
		height: '250px',
		color: '#c6c6c6'
	});

	$(".rad-toggle-btn").on('click', function() {
		$(".rad-logo-container").toggleClass("rad-nav-min");
		$(".rad-sidebar").toggleClass("rad-nav-min");
		$(".rad-body-wrapper").toggleClass("rad-nav-min");
	});

	$("li.rad-dropdown > a.rad-menu-item").on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(".rad-dropmenu-item").removeClass("active");
		$(this).next(".rad-dropmenu-item").toggleClass("active");
	});

	$(".fa-chevron-down").on("click", function() {
		var $ele = $(this).parents('.panel-heading');
		$ele.siblings('.panel-footer').toggleClass("rad-collapse");
		$ele.siblings('.panel-body').toggleClass("rad-collapse", function() {
		});
	});
	
});
