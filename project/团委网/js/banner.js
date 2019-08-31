/*Banner*/
//获取每张图片的宽度
var Banner = {
	 len:6, //拿到初始化后的图片个数4+2
	 imgWidth:370,
	 imgIndex:1,//一开始下标是取1，不是0
	 
	 //设置自动播放banner图
	 BannerTime:null,
	 nowTime:0,

	//初始化Banner图,首尾添加两张
	visorhide:function(){
		var ul = $(".c_canBanner").find("ul");
		var first = ul.children().first().clone(); //克隆第一张图片
		var last = ul.children().last().clone(); //克隆最后一张图片
		$(".c_canBanner ul").prepend(last);
		$(".c_canBanner ul").append(first);
		$(".c_canBanner").css({"marginLeft":-Banner.imgWidth}); //一开始就是第二张图片
		
		//控制banner图的两个耳朵的出现和隐藏
		$(".c_last").hover(function(){
			$(this).css({backgroundPosition:"0 0"});
		},function(){
			$(this).css({backgroundPosition:"-84px 50%"});
		});
		$(".c_next").hover(function(){
			$(this).css({backgroundPosition:"-208px 0"});
		},function(){
			$(this).css({backgroundPosition:"-125px 50%"});
		});
		//初始化文字上移
		$(".c_canBanner li").eq(1).find(".recomtextover").addClass("uptextover");
	},
	
	btnclick:function(){
		$(".c_bta").hover(function(){
			Banner.imgIndex = $(this).parents(".b_cir").index() + 1;
			//设置文字的上移
			$(".c_canBanner li").eq(Banner.imgIndex).find(".recomtextover").addClass("uptextover").parents("li").siblings().find(".recomtextover").removeClass("uptextover");

			$(this).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");//因为c_bta没有兄弟姐妹，只有他的父母有兄弟姐妹，通过他父母的兄弟姐妹找到c_bta，一次移除其他兄弟姐妹的样式
			$(".c_canBanner").stop().animate({"marginLeft":-Banner.imgIndex*Banner.imgWidth});
		});
	},
	
	autoPlay:function(){
		Banner.BannerTime = setInterval(function(){
			$(".c_next").trigger("click");
		},3000);
	},
	
	moseoverwhen:function(){
		$(".c_canBanner").mouseover(function(){
			clearInterval(Banner.BannerTime);
		}).mouseout(function(){
			Banner.autoPlay();
		});
		//设置鼠标进入耳朵的时候，清除定时器
		$(".btnBan").hover(function(){
			clearInterval(Banner.BannerTime);
		},function(){ //离开耳朵的时候
			Banner.autoPlay();
		});
	},
	
	earwhen:function(flag){
		//当点击耳朵的时候
		if(new Date() - Banner.nowTime > 500){
			Banner.nowTime = new Date();
			if(flag){ //true代表左耳朵
				var tindex = (Banner.imgIndex == 0) ? 0 : --Banner.imgIndex;
			}else{ //右耳朵
				var tindex = (Banner.imgIndex == Banner.len) ? Banner.len : ++Banner.imgIndex;
			}
			Banner.changeBanner(tindex);
		}
	},

	//点击左右耳朵的方法
	changeBanner:function($index){
		$(".c_bta").eq($index-1).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");
		$(".c_canBanner").stop(true,true).animate({"marginLeft":-Banner.imgWidth*$index},function(){
			if($index == 0){ //判断回到最后一张图片
				$(".c_canBanner").css({"marginLeft":-Banner.imgWidth*(Banner.len - 2)});//所有图片回到最终状态
				$(".c_bta").eq(Banner.imgIndex-1).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");
				Banner.imgIndex = Banner.len - 2;
			}else if($index >= Banner.len - 1){ //判断回到第一张图片
				$(".c_canBanner").css({"marginLeft":-Banner.imgWidth});//所有图片回到最初状态
				$(".c_bta").eq(0).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");
				Banner.imgIndex = 1;
			}
		});
		//设置文字的上移
		var flagindex = $index;
		$(".c_canBanner li").eq(flagindex).find(".recomtextover").addClass("uptextover").parents("li").siblings().find(".recomtextover").removeClass("uptextover");
		//判断回到最后一张图片
		if(flagindex==0){
			$(".c_canBanner li").eq(4).find(".recomtextover").addClass("uptextover");
		}
		//判断回到第一张图片
		else if(flagindex == 5){
			$(".c_canBanner li").eq(1).find(".recomtextover").addClass("uptextover");
		}
	}
};

Banner.moseoverwhen();
Banner.btnclick(); //点击下标
Banner.visorhide();//鼠标滑进耳朵的时候
Banner.autoPlay();//一开始设置自动播放轮播图
//当点击左耳朵
$(".c_last").click(function(){
	Banner.earwhen(true);
});
//当点击右耳朵
$(".c_next").click(function(){
	Banner.earwhen(false);
});