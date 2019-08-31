/*控制导航条中的子导航的出现与消失*/
$(".nav_inner").hover(function(){
	$(this).find(".nav_list").stop().slideDown(200);
},function(){
	$(this).find(".nav_list").stop().slideUp(200);
});


//设置多行文字溢出处理
$(".container .c_h_right li").each(function(){
	var descc = $(this).find("p").text();
	$(this).find("p").text(subdesc(descc));
});

function subdesc(desc){
	if(desc.length>24)desc = desc.substring(0,23)+"...";
	return desc;
}

/*控制海洋网站和校内导航选项卡的切换*/
$("#seaInternet").hover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".f_f_sea").show();
	$(".f_f_inner").hide();
});
$("#schoolInner").hover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".f_f_inner").show();
	$(".f_f_sea").hide();
});

/*回到顶部*/
$(window).scroll(function(){
	if($(window).scrollTop() >= 200){
		$(".backTop").fadeIn(500);
	}else{
		$(".backTop").stop(true,true).fadeOut(500);
	}
});
$(".backTop").click(function(){
	$("html,body").animate({
		scrollTop:0
	},300);
});