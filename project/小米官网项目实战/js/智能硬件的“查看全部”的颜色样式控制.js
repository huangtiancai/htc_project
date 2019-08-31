$(function(){
			/*智能硬件的“查看全部”的颜色样式控制*/
			$(".t_all").hover(function(){
				$(this).addClass("YingquoteColor");
				$(".A_radius").addClass("Yingquote");
			},function(){
				$(this).removeClass("YingquoteColor");
				$(".A_radius").removeClass("Yingquote");
			});
			$(".A_radius").hover(function(){
				$(this).addClass("Yingquote");
				$(".t_all").addClass("YingquoteColor");
			},function(){
				$(this).removeClass("Yingquote");
				$(".t_all").removeClass("YingquoteColor");
			});

			$(".t_slide ul li").hover(function(){
				$(this).addClass("borderBtom").siblings().removeClass("borderBtom");
				$(this).find("a").addClass("borderA").parents(".t_slide ul li").siblings().find("a").removeClass("borderA");

				var Index = $(this).index();
				//因为它的兄弟姐妹包括y_title和y_left和clear，所以必须过滤掉这三个再隐藏
				//使用this，从当前找到父母再找到儿子，这就能实现多机制选择而各机制间不会乱
				$(this).parents(".Ying").find(".l_"+Index).show().siblings().not(".y_title").not(".y_left").not(".clear").hide();
			});

		});