$(function(){
			var close = true;
			$(".r_right").click(function(){
				$(".m_content").animate({"marginLeft":-1226,});
				$(".r_left").css({color:"#6D6B6B"});
				$(".r_right").css({color:"#C7C5C5"});
				close = false;
			});
			$(".r_left").click(function(){
				$(".m_content").animate({"marginLeft":0,});
				$(".r_right").css({color:"#6D6B6B"});
				$(".r_left").css({color:"#C7C5C5"});
				close = true;
			});

			var time = null;
			function TimeSlid(){
				time = setInterval(function(){
					if(close){
						$(".r_right").trigger("click");
					}else{
						$(".r_left").trigger("click");
					}
				},5000);
			}
			TimeSlid();

			/*为你推荐的Banner控制*/
			var tuiIndex = 0;
			$(".rr_right").click(function(){
				tuiIndex++;
				if(tuiIndex >= 3){
					$(this).addClass("rr_quote");
					tuiIndex = 3;
				}else if(tuiIndex > 0 || tuiIndex < 3){
					$(this).removeClass("rr_quote");
					$(".rr_left").removeClass("rr_quote");
				}
				$(".Ying .Y_tui").animate({"marginLeft":-1240*tuiIndex,});
			});
			$(".rr_left").click(function(){
				tuiIndex--;
				if(tuiIndex <= 0){
					$(this).addClass("rr_quote");
					tuiIndex = 0;
				}else if(tuiIndex > 0 || tuiIndex < 3){
					$(this).removeClass("rr_quote");
					$(".rr_right").removeClass("rr_quote");
				}
				$(".Ying .Y_tui").animate({"marginLeft":-1240*tuiIndex,});
			});
		});