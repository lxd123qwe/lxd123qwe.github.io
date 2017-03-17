<html>
<head>
<meta charset="UTF-8">
<title>My file</title><script type="text/javascript">


		function newDate(){
			var curDate =new Date();
			var curDateStr=
					curDate.getFullYear()+"年"+(curDate.getMonth()+1)+"月"+curDate.getDate()+"日 "
					+curDate.getHours()+"时"+curDate.getMinutes()+"分"+curDate.getSeconds()+"秒"
			document.getElementById("span_time").innerHTML=curDateStr;
		}
		window.setInterval("newDate()",1000);
	</script>
<style type="text/css">
	body{ margin:0px; padding:0px; font-family:"微软雅黑"; 
		font-size:14px;background:#9400d3;}
	.wz_1{width:960px; height:100px;background:#666;margin:auto;}
    .wz_2{width:960px;height:600px;margin:auto;}
    .wz_3{width:960px;height:100px; background:#666;margin:auto;}
    .zuo{width:700px;height:600px;background:#455678;float:left;}
    .you{width:260px;height:600px;float:left;}
    #you_1{width:260px;height:200px;background:#404040;float:left;}
    #you_2{width:260px;height:200px;background:#626262;float:left;}
   #you_3{width:260px;height:200px;background:#404040;float:left;}
</style>
</head>
<body>
<div class="wz_1">上
<h1>欢迎来到我博客</h1>
当前时间:<span class="span" id="span_time"></span>

</div>

<div class="wz_2">
     <div class="zuo">左</div>
     <h1>李新东</h1>
     
     <div calss="you">
         <div id="you_1">右1</div>
         <div id="you_2">右2</div>
         <div id="you_3">右3</div>
     </div>
</div>
<div class="wz_3">下</div>
</body>
</html>
