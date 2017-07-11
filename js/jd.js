//变速函数的封装
function anim(ele,js,func){
			// 多次点击时,使得这个元素的计时器停止
			clearInterval(ele.timer);
			ele.timer = setInterval(function(){
				// 声明一个开关,去表示是否可以停止计时器
				var isStop = true;
				for(var attrName in js){
					// 根据attrName进行不同区分对待
					var step ;
					if(attrName == "opacity"){
						step = (js[attrName]*100 - getAttr(ele,attrName) * 100)/10;
					}else{
						step = (js[attrName] - parseInt(getAttr(ele,attrName)))/10;
					}
					// 根据step正负值来进行对应的判断
					step = step>0?Math.ceil(step):Math.floor(step);
					if(attrName == "opacity"){
						ele.style.opacity = (getAttr(ele,attrName) * 100 + step)/100;
					}else if(attrName == "z-index"){
						ele.style.zIndex = js[attrName];
					}else{
						ele.style[attrName] = parseInt(getAttr(ele,attrName)) + step + "px";
					}
					// 对于当前属性值跟目标值进行比较,只要有一个属性值还不等于target,那么isStop就设置为false
					var compare = (attrName == "opacity")?getAttr(ele,attrName):parseInt(getAttr(ele,attrName));
					if(compare != js[attrName]){
						isStop = false;
					}
				}
				// 对于计时器的停止
				if(isStop){
					console.log("停下来了");
					clearInterval(ele.timer);
					if(func!=null){
						func();
					}
				}
			}, 10);
		}
// 使用一个函数去获取到这个元素的属性值
function getAttr(ele,attrName){
	// ie9以上以及其他浏览器上的写法
	if(window.getComputedStyle!=null){
		return window.getComputedStyle(ele)[attrName];
	}else{
		// ie 6,7,8
		return ele.currentStyle[attrName];
	}
}
//找到元素的封装
function $(name){
			var prefix = name.charAt(0);
			if(prefix=="#"){
				var id = name.substring(1);
				return document.getElementById(id);
			}
			else if(prefix=="."){
				var className=name.substring(1);
				return getElesByClassName(className);
			}else{
				return document.getElementsByTagName(name);
			}
		}
function getElesByClassName(className){
	if(document.getElesByClassName){
		return document.getElesByClassName(className);
	}
	else{
		var arr=[];
		var all=document.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			var eleName=all[i].className;
			var ar = eleName.split(" ");
			for(var j=0;j<ar.length;j++){
				if(ar[j]==className){
					arr.push(all[i]);
					break;
				}
			}
		}
	}
	return arr;
}

// =====================================================================
