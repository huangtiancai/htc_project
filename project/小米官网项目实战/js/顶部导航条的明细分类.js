$(function(){
	/*顶部导航条的明细分类*/
			var ULliaIndex = -1;
			var ULLItime = null;
			$(".top .t_content ul li a").mouseover(function(){
				clearInterval(ULLItime);
				ULliaIndex = $(this).parents("li").index();
				$(this).addClass("TopQuote").parents("li").siblings().find("a").removeClass("TopQuote");
				$(".top_ulli ul li").eq(ULliaIndex).slideDown().siblings().hide();
				if(ULliaIndex>6){
					$(".top_ulli ul li").slideUp();
				}
			}).mouseout(function(){
				ULLItime = setInterval(function(){
					$(".top .t_content ul li").eq(ULliaIndex).find("a").removeClass("TopQuote");
					$(".top_ulli ul li").eq(ULliaIndex).slideUp();
				});
			});
			$(".top_ulli ul li").mousemove(function(){
				clearInterval(ULLItime);
			}).mouseleave(function(){
				$(".top .t_content ul li").eq(ULliaIndex).find("a").removeClass("TopQuote");
				$(".top_ulli ul li").eq(ULliaIndex).slideUp();
			});
});