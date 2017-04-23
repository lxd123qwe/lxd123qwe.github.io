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
	
</style>
<link href="css/1.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="wz_1">上
<h1>欢迎来到我博客</h1>
当前时间:<span class="span" id="span_time"></span>

</div>

<div class="wz_2">
     <div class="zuo">左</div>
     
     <div calss="you">
         <div id="you_1">右1</div>
         <div id="you_2">右2</div>
         <div id="you_3">右3</div>
     </div>
</div>
<div class="wz_3">下</div>
</body>
</html>
