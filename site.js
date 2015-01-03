$( document ).ready(function() {
	$('.back-face i').hover(
		function () {
			$(this).removeClass("off");
			$(this).addClass("on");
		}, 
		function () {
			$(this).removeClass("on");
			$(this).addClass("off");
		}
	);
});