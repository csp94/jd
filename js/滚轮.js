var hd = $(".head")[0];
var enjoy=$("#enjoy");
var enjoyHeight = enjoy.offsetTop;
var lifs = $(".lift_list")[0];
window.onscroll=function(){
	var tp = scroll();
	if(tp>enjoyHeight){
		hd.style.display="block";
		hd.className="head fixed";
	}else{
		hd.style.display="none";
		}
	current=scroll();
}

var bk = lifs.children[10];
var time = null;
var target=0;
var current=0;
// 回到顶部
bk.onmouseover = function(){
clearInterval(time);
time = setInterval(function(){
current+=(target-current)/10;
window.scrollTo(0,current);
if(parseInt(current)==0){
		current = 0;
		clearInterval(time);
		window.scrollTo(0, current);
	}
},10)
}








function scroll(){
if(window.pageYOffset!=null){
	return window.pageYOffset;
}else{
	return document.documentElement.scrollTop;
	}
}