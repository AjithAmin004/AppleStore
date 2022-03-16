var menu = document.getElementById("nav");
menu.style.maxHeight="0px";
function toggle(){
    if(menu.style.maxHeight=="0px"){
        menu.style.maxHeight="150px";
    }else{
        menu.style.maxHeight="0px";
    }
}