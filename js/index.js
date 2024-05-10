
var mdProduct01 = document.getElementById("product_02_all_01");
var mdProduct02 = document.getElementById("product_02_all_02");
var mdProduct03 = document.getElementById("product_02_all_03");

var body = document.getElementsByTagName("body");


var button1 = function(){
    mdProduct01.style.opacity = "100%";
    mdProduct02.style.opacity = "0%";
    mdProduct03.style.opacity = "0%";
}

var button2 = function(){
    mdProduct01.style.opacity = "0%";
    mdProduct02.style.opacity = "100%";
    mdProduct03.style.opacity = "0%";
}

var button3 = function(){
    mdProduct01.style.opacity = "0%";
    mdProduct02.style.opacity = "0%";
    mdProduct03.style.opacity = "100%";
}

window.onresize = function(event){
  var innerWidth = window.innerWidth;
  if(innerWidth <= "800"){
    mdProduct01.style.opacity = "100%";
    mdProduct02.style.opacity = "100%";
    mdProduct03.style.opacity = "100%";
  }
}