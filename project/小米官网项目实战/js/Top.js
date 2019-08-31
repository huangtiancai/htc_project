$(function(){
			var time = null;
			$(".r_a").hover(function(){
				clearInterval(time);
				$(".r_a").addClass("selected");
				$(".a_img").addClass("selectImg");
				$(".c_togg").stop(true,true).slideDown();
			},function(){//hover离开的时候,回调函数,就创建定时器隐藏
				time = setInterval(function(){
					$(".c_togg").slideUp();
					$(".r_a").removeClass("selected");
					$(".a_img").removeClass("selectImg");
				},50);
			});

			$(".c_togg").mouseleave(function(){
				$(".c_togg").slideUp();
				$(".r_a").removeClass("selected");
				$(".a_img").removeClass("selectImg");
			}).mouseover(function(){
				clearInterval(time);
				$(".r_a").addClass("selected");
				$(".a_img").addClass("selectImg");
			});

			var close = true; //一把锁
			//当鼠标进入搜索按钮时
			$(".r_op").hover(function(){
				$(this).find("img").attr("src","images/op2.png");
				$(this).parents(".t_right").css({border:"1px solid #f60"});
				$(this).parents(".t_right").find(".r_input").css({borderRight:"1px solid #f60"});
			},function(){
				$(this).find("img").attr("src","images/op.png");
				if(close){ //如果文本框没有聚焦的时候
					$(this).parents(".t_right").css({border:"1px solid #e0e0e0"});
					$(this).parents(".t_right").find(".r_input").css({borderRight:"1px solid #e0e0e0"});
				}
			});
			//当鼠标进入搜索框时
			$(".r_input").hover(function(){
				if(close){ //如果文本框没有聚焦的时候
					$(this).parents(".t_right").css({border:"1px solid #b0b0b0"});
					$(this).css({borderRight:"1px solid #b0b0b0"});
				}
			},function(){
				if(close){ //如果文本框没有聚焦的时候
					$(this).parents(".t_right").css({border:"1px solid #e0e0e0"});
					$(this).css({borderRight:"1px solid #e0e0e0"});
				}
			});
			//当鼠标进入搜索框里面的span标签时
			$(".r_inner").hover(function(){
				if(close){ //如果文本框没有聚焦的时候
					$(this).parents(".t_right").css({border:"1px solid #b0b0b0"});
					$(this).parents(".t_right").find(".r_input").css({borderRight:"1px solid #b0b0b0"});
				}
			},function(){
				if(close){ //如果文本框没有聚焦的时候
					$(this).parents(".t_right").css({border:"1px solid #e0e0e0"});
					$(this).parents(".t_right").find(".r_input").css({borderRight:"1px solid #e0e0e0"});
				}
			});
			//当鼠标聚焦文本框和失焦时
			$(".r_input").focus(function(){
				close = false; //聚焦锁上
				$(this).parents(".t_right").css({border:"1px solid #f60"});
				$(this).css({borderRight:"1px solid #f60"});
				$(".r_inner").hide();
			}).blur(function(){
				close = true; //失焦解锁
				$(this).parents(".t_right").css({border:"1px solid #e0e0e0"});
				$(this).css({borderRight:"1px solid #e0e0e0"});
				$(".r_inner").show();
			});
	});