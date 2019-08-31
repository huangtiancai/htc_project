$(function(){

	/*Banner图特效*/
		var index = 1;
		var con = $(".content .con_ce");
	    var $rad = $(".content .con_ce .ce_rr ul li"); //下边的数字
		var $picDiv = $(".content .con_ce .banwrap ul"); //拿到6张图片所在的很长的ul
		var $pic = $(".content .con_ce .banwrap ul li"); //拿到图片
		var $btn = $(".content .con_ce .c_k");
		var imgWidth = $pic.width(); //拿到图片的宽度

		//控制耳朵的显示和隐藏
		con.mouseover(function(){
		   $btn.css("display","block");
		});
		con.mouseout(function(){
		   $btn.hide();
		});

		function initBanner(){ //初始化banner图,首尾添加两张
		   var $ul = $(".content .con_ce .banwrap").find("ul");
		   var $first = $ul.children().first().clone(); //克隆第一张图片
		   var $last = $ul.children().last().clone();
		   $ul.append($first);
		   $ul.prepend($last);
		}
		initBanner();

		var len = $picDiv.children().length; //拿到初始化后的ul li的长度8

		$picDiv.css({"margin-left":-imgWidth}); //一开始就是第二张图片

		$rad.click(function(){ //点击下边数字
		   index = $(this).index() + 1;
		   $(this).addClass("on").siblings().removeClass("on");
		   $picDiv.animate({"margin-left":-imgWidth*index});//是外面的大盒子移动从而带动图片移动
		});

		var nowTime = 0;
		$(".content .con_ce .ce_l").click(function(){ //点击左耳朵
			if(new Date() - nowTime > 500){
				nowTime = new Date();
				var tindex = (index==0)? 0 : --index;
				changeBanner(tindex);
			}
		});

		$(".content .con_ce .ce_r").click(function(){  //点击右耳朵
			if(new Date() - nowTime > 500){
				nowTime = new Date();
				var tindex = (index==len)? len : ++index;
				changeBanner(tindex);
			}
		});

		function changeBanner($Index){
		  $rad.eq($Index - 1).addClass("on").siblings().removeClass("on");
		  $picDiv.stop(true, true).animate({"margin-left":-imgWidth*$Index},function(){
			  if($Index >= len - 1){  //判断回到第一个图片(大于或等于的时候执行，如果鼠标点击太快了，一下子大于7的话，(len == 8)也必须执行index = 1，所以这里必须用>=)
				 $picDiv.css({"margin-left":-imgWidth});
				 $rad.eq(0).addClass("on").siblings().removeClass("on");//第一个数字
				 index = 1; //计数器也从1开始
			  }
			  if($Index == 0){  //判断左移回到最后
				 $picDiv.css({"margin-left":-imgWidth*(len-2)});
				 $rad.eq(index - 1).addClass("on").siblings().removeClass("on");//最后一个数字
				 index = len - 2;
			  }
		  }); 
		}

		var timer1 = null;
		function autoplay(){
		   timer1 = setInterval(function(){
		       $(".content .con_ce .ce_r").trigger("click");
		   },3000);
		}
		
		$(".con_ce").mouseover(function(){
		   clearInterval(timer1);
		}).mouseout(function(){
		   autoplay();
		});

		autoplay();

	/*商品明细分类*/
		var timer2 = null;
		var detail = $(".sdetails");
		var _this = null;
		$(".content .con_l").find("li").hover(function(){
			clearInterval(timer2);
			var Dindex = $(this).index();
			_this = $(this);  //用于传递给mouseover方法，为导航条添加样式
		    detail.find(".sitems").eq(Dindex).show().siblings().hide();
		},function(){  //hover离开的时候
			timer2 = setTimeout(function(){ //定义一个隐藏sitems的动画
			    detail.find(".sitems").hide();
				$(".con_l").find("li").removeClass("selected");
				$(".con_l").find("li").find("a").removeClass("selectedFont");
			},50);
		});

		detail.mouseleave(function(){//鼠标离开sitems的时候，清除动画，并且隐藏sitems
			detail.find(".sitems").hide();
			$(".con_l").find("li").removeClass("selected");
			$(".con_l").find("li").find("a").removeClass("selectedFont");
		}).mouseover(function(){
			clearInterval(timer2);//鼠标进入商品分类界面(sitems)的时候，肯定要清除此动画
			_this.addClass("selected");
			_this.find("a").addClass("selectedFont");
		});/*由于没有定义离开导航条的任何方法，所以离开导航条时，清除sitems动画就会执行*/
	 });