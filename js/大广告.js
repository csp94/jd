//大广告轮播事件
//两边按键浮现
$(".main")[0].onmouseover=function(){
	$(".l")[0].style.display="block";
	$(".r")[0].style.display="block";
}
$(".main")[0].onmouseleave=function(){
	$(".l")[0].style.display="none";
	$(".r")[0].style.display="none";
}
//小圆点
var lis = $(".indicaor")[0].children;
var pics = $(".big")[0].children;
//触摸切换图片
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseover=function(){
		for(var j=0;j<lis.length;j++){
			lis[j].className="";
			anim(pics[j],{"z-index":0,"opacity":0});
		}
		lis[this.index].className="current";
		anim(pics[this.index],{"z-index":1,"opacity":1});
	}
}

// 点击图片切换
var num = 0;
$(".l")[0].onclick=function(){
	num--;
	if(num>=0&&num<8){
		num%=lis.length;
	}else if(num<0){
		num+=lis.length;
	}
	for(var j=0;j<lis.length;j++){
		lis[j].className="";
		anim(pics[j],{"z-index":0,"opacity":0});
	}
	lis[num].className="current";
	anim(pics[num],{"z-index":1,"opacity":1});
}
$(".r")[0].onclick=function(){
	num++;
	num%=lis.length;
	for(var j=0;j<lis.length;j++){
		lis[j].className="";
		anim(pics[j],{"z-index":0,"opacity":0});
	}
	lis[num].className="current";
	anim(pics[num],{"z-index":1,"opacity":1});
}
// ===========================================================================================


//菜单切换

//发现好货的动画
var cats = $(".cat")[0].children;
var imgs = $(".ig");
for(var i=0;i<cats.length;i++){
	cats[i].index=i;
	cats[i].onmouseover=function(){
		for(var j=0;j<cats.length;j++){
			anim(imgs[j],{"right":10});
		}
		anim(imgs[this.index],{"right":20});
	}
	cats[i].onmouseleave=function(){
		anim(imgs[this.index],{"right":10});
	}
}

//优品专辑的动画
var findtab =$(".find-tab")[0];
var lt = $(".lt")[0];
var rt = $(".rt")[0];
var tabs = $(".bb")[0].children;
var sps = $(".spp");
findtab.onmouseover=function(){
	lt.style.display="block";
	rt.style.display="block";
}
findtab.onmouseleave=function(){
	lt.style.display="none";
	rt.style.display="none";
}
// 触摸切换图片
for(var i=0;i<tabs.length;i++){
	tabs[i].index=i;
	tabs[i].onmouseover=function(){
		for(var j=0;j<tabs.length;j++){
			tabs[j].style.backgroundColor="gray";
			anim(sps[j],{"z-index":0,"opacity":0});
		}
		tabs[this.index].style.backgroundColor="red";
		anim(sps[this.index],{"z-index":1,"opacity":1});
	}
}
//点击切换图片
var tts = 0;
lt.onclick=function(){
	tts--;
	if(tts>=0&&tts<3){
		tts%=tabs.length;
	}else if(tts<0){
		tts+=tabs.length;
	}
	for(var j=0;j<tabs.length;j++){
		tabs[j].style.backgroundColor="gray";
		anim(sps[j],{"z-index":0,"opacity":0});
	}
	tabs[tts].style.backgroundColor="red";
	anim(sps[tts],{"z-index":1,"opacity":1});
}
rt.onclick=function(){
	tts++;
	tts%=tabs.length;
	for(var j=0;j<tabs.length;j++){
		tabs[j].style.backgroundColor="gray";
		anim(sps[j],{"z-index":0,"opacity":0});
	}
	tabs[tts].style.backgroundColor="red";
	anim(sps[tts],{"z-index":1,"opacity":1});
}
// ===========================================================================
// 排行榜动画
var pao = $(".pao")[0];
var rks = $(".rk");
var jpts = $(".jpt");
for(var i=0;i<rks.length;i++){
	rks[i].index=i;
	rks[i].onmouseover=function(){
		anim(pao,{"left":this.offsetLeft});
		for(var j=0;j<rks.length;j++){
			anim(jpts[j],{"z-index":0,"opacity":0});
		}
			anim(jpts[this.index],{"z-index":1,"opacity":1});
	}
}

// ===========================================================================
// 领券中心
var beds = $(".bed");
var pay = $(".pay")[0];
var lbs = pay.children;
for(var i=0;i<lbs.length;i++){
	lbs[i].index=i;
	lbs[i].onmouseover=function(){
		for(var j=0;j<lbs.length;j++){
			anim(beds[j],{"right":15});
		}
		anim(beds[this.index],{"right":0});
	}
	lbs[i].onmouseleave=function(){
		anim(beds[this.index],{"right":15});
	}
}

// =========================================================================================
// 小图片
var recs = $(".rec-list")[0].children;
for(var i=0;i<recs.length;i++){
	recs[i].index=i;
	recs[i].onmouseover=function(){
		for(var j=0;j<recs.length;j++){
			anim(recs[j],{"opacity":1});
		}
		anim(recs[this.index],{"opacity":0.7});
	}
}
// =========================================================================================
// 服装
// 爱逛
// var sms = $(".sms");
// var ms = $(".mores");
// console.log(sms);
// console.log(ms);
// for(var i=0;i<ms.length;i++){
// 	sms[i].index=i;
// 	ms[i].onmouseover=function(){
// 		for(var j=0;j<ms.length;j++){
// 			anim(sms[j],{"right":5});
// 		}
// 		anim(sms[this.index],{"right":15});
// 	}
// 	ms[i].onmouseleave=function(){
// 		anim(sms[this.index],{"right":5});
// 	}
// }
// =========================================================================================

//菜单
var menus =$(".mens")[0].children;
var pops = $(".pop")[0];
var fs = $(".fs")[0];
for(var i=0;i<menus.length;i++){
	menus[i].onmouseover=function(){
		pops.style.display="block";
	}
	menus[i].onmouseleave=function(){
		pops.style.display="none";
	}
}
