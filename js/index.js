var box=$(".click")
var boximg=$(".img-box")
for(var i=0;i<box.length;i++){
	box[i].index=i;
	box[i].onclick=function(){
		for(var i=0;i<boximg.length;i++){
			boximg[i].style.display="none"
		}
		boximg[this.index].style.display="block";
	}
}
for(var i=0;i<boximg.length;i++){
	boximg[i].index=i;
	boximg[i].onclick=function(){
		
		boximg[this.index].style.display="none";
	}
}