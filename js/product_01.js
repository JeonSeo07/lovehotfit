
var proImg_01 = document.getElementById("pro_img_box_01");
var proImg_02 = document.getElementById("pro_img_box_02");
var proImg_03 = document.getElementById("pro_img_box_03");

proImg_02.addEventListener("mouseover",function(){
    proImg_01.classList.add("change01");
    proImg_01.classList.remove("change02");
    proImg_02.style.opacity = "60%";
    proImg_03.style.opacity = "100%";
});

proImg_03.addEventListener("mouseover",function(){
    proImg_01.classList.remove("change01");
    proImg_01.classList.add("change02");
    proImg_02.style.opacity = "100%";
    proImg_03.style.opacity = "60%";
});


window.onresize = function(event){
    var innerWidth = window.innerWidth;
    
    if(innerWidth <= "800"){
        proImg_02.style.opacity = "100%";
        proImg_03.style.opacity = "100%";

    }
}
