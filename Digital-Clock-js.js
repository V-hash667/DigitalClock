const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const session=document.getElementById('AMPM');
function updateclock(){
	var h=new Date().getHours();
	var m=new Date().getMinutes();
	var s=new Date().getSeconds();
	var ampm="AM";
	if (h>12){
		h=h-12;
		ampm="PM"
	}
h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

	hour.innerText=h;
	minute.innerText=m;
	second.innerText=s;
	session.innerText=ampm;
	


setTimeout(updateclock,1000)
}
updateclock();

