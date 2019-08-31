$(function(){
	/*左侧导航条的明细菜单列表*/
			var ulliIndex = 0;
			var Ullitime = null;
			$(".c_left .l_ul li").mouseover(function(){
				clearInterval(Ullitime); //在给当前导航条添加样式的时候必须清除定时器
				ulliIndex = $(this).index();
				$(this).addClass("liquote").siblings().removeClass("liquote");
				$(".l_div ul li").eq(ulliIndex).show().siblings().hide();
			}).mouseout(function(){
				Ullitime = setInterval(function(){
					$(".c_left .l_ul li").eq(ulliIndex).removeClass("liquote");
					$(".l_div ul li").eq(ulliIndex).hide();
				},50);
			});

			$(".l_div ul li").mousemove(function(){
				clearInterval(Ullitime);
			}).mouseleave(function(){
				$(".c_left .l_ul li").eq(ulliIndex).removeClass("liquote");
				$(".l_div ul li").eq(ulliIndex).hide();
			});
});