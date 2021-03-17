var btnCall = document.querySelector(".btnCall");
var menuMo = documemt.querySelector(".menuMo");

btnCall.onClick = function(){
    menuMo.classList.toggle("on");
}
    //.classList.add()
    //.classList.remove()

window.onresize = function(){
    var wid = window.innerWidth;
    // console.log(wid)

    if(wid>=1180){
        menuMo.classList.remove("on");
    }
}