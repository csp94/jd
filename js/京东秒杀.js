var bs = $(".bx")[0].children;
$(".bx")[0].onmouseover=function(){
	$(".prev")[0].style.display="block";
	$(".next")[0].style.display="block";
}
$(".bx")[0].onmouseleave=function(){
	$(".prev")[0].style.display="none";
	$(".next")[0].style.display="none";
}
var bx = $(".bx")[0];
var num=0;
for(var i=0;i<3;i++){
	$(".prev")[0].onclick=function(){
		if(num<0){
			num++;
			anim(bx,{"left":1000*num});
		}
	}
	$(".next")[0].onclick=function(){
		if(num>-3){
			num--;
			anim(bx,{"left":1000*num});
		}
	}
}
