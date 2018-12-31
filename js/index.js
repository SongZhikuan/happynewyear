window.onload = function(){	
	var pege1 = document.getElementById("page1");
	var pege2 = document.getElementById("page2");
	var pege3 = document.getElementById("page3");
	var p1_lantern = document.getElementsByClassName("p1_lantern")[0];
	
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	
	//音乐播放完停止的时候，自动停止光盘转动
	audio.addEventListener("ended", function(event){
		music.setAttribute("class","");
	},false);
	
	music.addEventListener("touchstart", function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		}
	},false);
	
	//点击屏幕，开启幸运2018
	p1_lantern.addEventListener("touchstart", function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn")
		},5500);
	},false);
	
}

