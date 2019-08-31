
//对象.key 这是json获取key值的方法
function ajax(mJson){  //参数为json类型
	var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	var method = mJson.method || "get"; //如果不写，默认为get提交
	var url = mJson.url;
	var asyn = mJson.asyn || true;  //如果不写，默认为异步请求
	var data = mJson.data;
	var success = mJson.success;

	if(method == "get" && data){ //有数据和如果是get提交方式
		url += "?"+data+"&"+Math.random();//产生随机数，解决缓存问题
	}
	xhr.open(method,url,asyn);
	//设置请求头
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	if(method == "post" && data){
		xhr.send(data); //如果是post提交，就要在send发送方法内加上data数据
	}else{
		xhr.send();  //如果是get提交或者data为undefined，就这样
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(success)success(xhr.responseText); //如果success有内容，则调用成功请求的方法
		}
	}
};