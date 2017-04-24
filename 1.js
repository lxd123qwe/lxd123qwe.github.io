function newDate(){
			var curDate =new Date();
			var curDateStr=
					curDate.getFullYear()+"年"+(curDate.getMonth()+1)+"月"+curDate.getDate()+"日 "
					+curDate.getHours()+"时"+curDate.getMinutes()+"分"+curDate.getSeconds()+"秒"
			document.getElementById("span_time").innerHTML=curDateStr;
		}
		window.setInterval("newDate()",1000);