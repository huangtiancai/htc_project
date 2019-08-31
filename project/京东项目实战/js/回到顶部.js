$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= 100){
			$(".backTop").fadeIn(500);
		}else{
			$(".backTop").stop(true,true).fadeOut(500);
		}
	});
	$(".backTop").click(function(){
		$("html,body").animate({
			scrollTop:0
		},800);
	});
});