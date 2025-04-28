$(document).ready(function(){

	$('.top-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 400);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.top-up').slideDown(300);
		} else {
			$('.top-up').slideUp(300);
		}
	});

});