var btnCall = document.querySelector(".btnCall"); 
var menuMo = document.querySelector(".menuMo");

btnCall.onclick = function(){ //.btnCall 버튼을 누르면 
    btnCall.classList.toggle("on"); //햄버거버튼에 on클래스를 추가 또는 제거
    menuMo.classList.toggle("on");  //모바일메뉴상자에 on클래스를 추가 또는 제거

    

}

//.add("on") - on을 추가한다  
//.remove("on") - on을 제거한다
//.toggle("on") - 만약 on이 이미 있으면 제거하고, 없는 상태라면 추가  