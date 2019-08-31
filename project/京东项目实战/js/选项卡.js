$(function(){
			/*若要控制多个选项卡也不会乱，关键是从当前this找到父级再找到要显示的子级
			如:$(this).parents(".wrap").find("li").find(".shu").show();//先默认全部显示短竖线
		  */
			var len = $(".mcc li").length; //获取ulli的长度
			$(".beau .louone .mcc").find("li").hover(function(){
				var index = $(this).index();
				$(this).addClass("selectedTab").siblings().removeClass("selectedTab");
				$(this).find("a").addClass("selectedA");
	//a标签被li包裹着，所以没有兄弟姐妹，必须通过li的兄弟姐妹来find到a标签进行removeClass
				$(this).siblings().find("a").removeClass("selectedA");

				if(index == 0){ //当鼠标滑至第一个li时，
					$(this).parents(".mcc").addClass("selectedFirst");//添加左边框的红色样式
					$(this).parents(".mcc").find("li").find(".shu").show();//先默认全部显示短竖线
					$(this).parents(".mcc").find("li").eq(index+1).find(".shu").hide();//将第二个li隐藏短竖线
				}else if(index == len-1){ //当鼠标滑至最后一个li时，
					$(this).parents(".mcc").addClass("selectedLast");//添加左边框的红色样式
					$(this).parents(".mcc").find("li").find(".shu").show();//先默认全部显示短竖线
					$(this).find(".shu").hide();//将最后一个li隐藏短竖线
				}else{
					$(this).parents(".mcc").removeClass("selectedFirst");
					$(this).parents(".mcc").removeClass("selectedLast");
					$(this).parents(".mcc").find("li").find(".shu").show();//先默认全部显示短竖线
					$(this).find(".shu").hide();//隐藏当前li的短竖线
					$(this).parents(".mcc").find("li").eq(index+1).find(".shu").hide();//隐藏下一个li的短竖线
				}

				$(this).parents(".beau").find(".b_l").find(".tabcnt").find("li").eq(index).show().siblings().hide();
			});
		});