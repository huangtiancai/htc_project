$(function(){
	var CenIndex1 = 0;
			var CenIndex2 = 0;
			var CenIndex3 = 0;
			var CenIndex4 = 0;
			$(".cen_left").mouseover(function(){
				$(this).addClass("moreColor");
			}).mouseout(function(){
				$(this).removeClass("moreColor");
			});
			$(".cen_right").mouseover(function(){
				$(this).addClass("moreColor");
			}).mouseout(function(){
				$(this).removeClass("moreColor");
			});

			function LiClick(index,_this){
				_this.addClass("innerquote").siblings().removeClass("innerquote");
				_this.parents(".cen_div").animate({"marginLeft":-296*index});
			}
			$(".li_01").click(function(){
				var _this = $(this);
				CenIndex1 = $(this).index();
				LiClick(CenIndex1,_this);
			});
			$(".li_02").click(function(){
				var _this = $(this);
				CenIndex2 = $(this).index();
				LiClick(CenIndex2,_this);
			});
			$(".li_03").click(function(){
				var _this = $(this);
				CenIndex3 = $(this).index();
				LiClick(CenIndex3,_this);
			});
			$(".li_04").click(function(){
				var _this = $(this);
				CenIndex4 = $(this).index();
				LiClick(CenIndex4,_this);
			});

			function cenRight(CenIndex,_this){
				_this.parents(".cen_li").find(".cen_div").animate({"marginLeft":-296*CenIndex});
				_this.parents(".cen_li").find(".cen_div").find(".im_li").eq(CenIndex).addClass("innerquote").siblings().removeClass("innerquote");
			}

			function cenLeft(CenIndex,_this){
				_this.parents(".cen_li").find(".cen_div").animate({"marginLeft":-296*CenIndex});
				_this.parents(".cen_li").find(".cen_div").find(".im_li").eq(CenIndex).addClass("innerquote").siblings().removeClass("innerquote");
			}
			$(".r_01").click(function(){
				var _this = $(this);
				CenIndex1++;
				if(CenIndex1 > 3) CenIndex1 = 3;
				cenRight(CenIndex1,_this);
			});
			$(".l_01").click(function(){
				var _this = $(this);
				CenIndex1--;
				if(CenIndex1 < 0) CenIndex1 = 0;
				cenLeft(CenIndex1,_this);
			});

			$(".r_02").click(function(){
				var _this = $(this);
				CenIndex2++;
				if(CenIndex2 > 3) CenIndex2 = 3;
				cenRight(CenIndex2,_this);
			});
			$(".l_02").click(function(){
				var _this = $(this);
				CenIndex2--;
				if(CenIndex2 < 0) CenIndex2 = 0;
				cenLeft(CenIndex2,_this);
			});

			$(".r_03").click(function(){
				var _this = $(this);
				CenIndex3++;
				if(CenIndex3 > 3) CenIndex3 = 3;
				cenRight(CenIndex3,_this);
			});
			$(".l_03").click(function(){
				var _this = $(this);
				CenIndex3--;
				if(CenIndex3 < 0) CenIndex3 = 0;
				cenLeft(CenIndex3,_this);
			});

			$(".r_04").click(function(){
				var _this = $(this);
				CenIndex4++;
				if(CenIndex4 > 3) CenIndex4 = 3;
				cenRight(CenIndex4,_this);
			});
			$(".l_04").click(function(){
				var _this = $(this);
				CenIndex4--;
				if(CenIndex4 < 0) CenIndex4 = 0;
				cenLeft(CenIndex4,_this);
			});
});