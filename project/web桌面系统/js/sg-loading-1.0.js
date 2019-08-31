(function($){
	
	//javascript的设计模式---模块模式


	//插件初始化
	$.keLoading = function(options){
		//javascript的混入.mix ，讲对象中的相同属性覆盖，不同的合并
		var opts = $.extend({},$.keLoading.method,$.keLoading.defaults,options);
		//模板初始化
		var $loading = opts.template(opts);
		//loading居中
		opts.center($loading);
		//窗口响应居中
		opts.resize($loading);
		//该样式
		$loading.css("background",opts.bgcolor);
		//初始化事件
		opts.events($loading);
		//自动关闭
		opts.timeout($loading,opts);
	};	
	
	//插件的方法
	$.keLoading.method = {
		template:function(opts){
			$("#ke_loading").remove();
			var html = "";
			if(opts.overlay)html="<div class='overlay'></div>";
			$("body").append("<div id='ke_loading' class='animated bounceIn'>"+
			"	<span class='ke_img'><img src='images/loading.gif'/>"+
			"	<span class='ke_text'>"+opts.text+"</span>"+
			"	</div>"+html);
			
			return $("#ke_loading");
		},
		center:function($loading){
			var left = ($(window).width() - $loading.width())/2;
			var top = ($(window).height() - $loading.height())/2;
			$loading.css({
				left:left,
				top:top
			});
		},
		resize:function($loading){
			var $this = this;
			$(window).resize(function(){
				$this.center($loading);
			});
		},
		events:function($loading){
			//点击loading关闭
			$loading.on("click",function(){
				$(this).fadeOut("slow",function(){
					//关掉遮罩层同时关闭自己
					$(this).next().remove().end().remove();
				});
			});

			$loading.next().on("click",function(){
				$(this).fadeOut("slow",function(){							
					$(this).prev().remove().end().remove();
				});
			});
		},
		timeout:function($loading,opts){
			if(opts.time==0 || opts.time==""){
				return;
			}
			clearTimeout($loading.timer);
			$loading.timer = setTimeout(function(){
				$loading.trigger("click");
				if($loading.timer)clearTimeout($loading.timer);
			},opts.time*1000);
		}
	};
	
	//默认参数
	$.keLoading.defaults = {
		text:"请输入内容",
		bgcolor:"#111",
		overlay:false,
		time:0
	};

})(jQuery);

function loading(text,timeout){
	$.keLoading({text:text,time:timeout});
};