var SlideMoodule=(function(){
	var slideIndex = 1;

	var showDivs=function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("item1");
		  if (n > x.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = x.length}
		  for (i = 0; i < x.length; i++) {
		     x[i].className=x[i].className.replace(" active","");  
		  }
		  x[slideIndex-1].className += " active"; 
		}
	return {
		show:function show(n) {
  		showDivs(slideIndex+=n);
	}		
	}
})();
var SlideModule=(function(){
	var slideIndex = 1;

	var showDivs=function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("item2");
		  if (n > x.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = x.length}
		  for (i = 0; i < x.length; i++) {
		     x[i].className=x[i].className.replace(" active","");  
		  }
		  x[slideIndex-1].className += " active"; 
		}
	return {
		show:function show(n) {
  		showDivs(slideIndex+=n);
	}		
	}
})();
/*var slideIndex = 1;
showDivs(slideIndex);
function show(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].className=x[i].className.replace(" active","");  
  }
  x[slideIndex-1].className += " active"; 

}*/
/*var currentSlide=0;
function previous(){
	var x=document.getElementsByName('item');
	currentSlide = currentSlide == 0 ? imgArr.length-1 : currentSlide-1;
	targetImg.src = imgArr[currentSlide];
}
function next(){
	currentSlide = 
		currentSlide >= imgArr.length-1 
							? 0 : currentSlide+1;
	targetImg.src = imgArr[currentSlide];
}*/
 
/*setInterval(function(){
	next();
}, 3000);

var temp=0;
var imgArr2=['images/img2.jpg','images/img2.jpg','images/img2.jpg'];
var target_footer=document.getElementById('menu_imgfooter');
function Shuffer_Footer(){
	temp=temp == 0 ? imgArr2.length-1:temp -1;
	target_footer.src=imgArr2[temp];
}
function Next_Footer(){
	temp = temp >=imgArr2.length-1 ? 0:temp+1;
	target_footer.src=imgArr2[temp];
}*/

function Mouse1(){
	document.getElementById('f1').src='images/icon_hover.png';
}
function Out1(){
	document.getElementById('f1').src='images/icon.png';
}
function Mouse2(){
	document.getElementById('f2').src='images/icon_hover.png';
}
function Out2(){
	document.getElementById('f2').src='images/icon.png';
}
function Mouse3(){
	document.getElementById('f3').src='images/icon_hover.png';
}
function Out3(){
	document.getElementById('f3').src='images/icon.png';
}
function Mouse4(){
	document.getElementById('f4').src='images/icon_hover.png';
}
function Out4(){
	document.getElementById('f4').src='images/icon.png';
}
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}