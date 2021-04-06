/*
제이쿼리 이벤트
: 사용자가 웹상에서 하는 모든 행동
: 이벤트에 따라서 콜백함수의 인수에 특별값이 전달되기도 한다.

click : 클릭이벤트
mouseenter : 마우스오버
mouseleave : 마우스아웃
mousewheel : 마우스 휠 버튼을 위아래로 움직일 때
resize : 브라우저를 리사이즈할 때
scroll : 브라우저를 스크롤할 때

*/


//click 이벤트
$("ul li a").on("click", function(e){
    e.preventDefault();
    //이벤트의 기본 기능을 막아줌
    //click 이벤트에서는 클릭시 링크의 이동을 막아줌
    console.log("클릭하세요");
})


//mouseenter
$("ul li a").on("mouseentenr", function(){
    console.log("마우스가 해당영역에 들어갔습니다.");
    $(this).css({
            backgroundColor : "#555",
            color:"#fff"
        });
});


//mouseleave
$("ul li a").on("mouseleave", function(){
    console.log("마우스가 해당영역에 나왔습니다.");
    $(this).css({
            backgroundColor :"#fff",
            color:"#555"
    });
});


//mousewheel 이벤트
$(window).on("mousewheel",function(e){
    console.log(e);

    if(e.originalEvent.deltaY < 0){
        console.log("마우스휠을 올렸습니다");
    }else{
        console.log("마우스휠을 내렸습니다");
    }
});


//scroll 이벤트
$(window).on("scroll",function(e){
    var scroll = $(window).scrollTop();
    // 문서의 끝부터 스크롤한 거리값
    // console.log(scroll);
});


//mousemove 이벤트
$(window).on("mousemove",function(e){
    console.log(e);
    var posX = e.pageX;
    var posY = e.pageY;
    console.log(posX);
});


//resize 이벤트
$(window).on("resize",function(){
    console.log("브라우저를 리사이즈했습니다.")
})