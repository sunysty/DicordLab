/*

1. 변수설정

2. 이벤트 바인딩:
    1) btn1을 클릭했을 때
    2) wrap1의 close 버튼을 클릭했을 때

3. 함수정의
    oepnWrap1 함수 정의
    closeWrap1 함수 정의

4. 이벤트바인딩
    1) btn2를 클릭했을 때
    2) wrap2의 close 버튼을 클릭했을 때

5. 함수정의
    openWrap2 함수정의
    closeWrap2 함수정의

6. 다른 버튼을 눌렀을 때 이미 열려있는 박스 닫기
7. 클릭한 버튼 활성화
8. 같은 버튼 재클릭시 재호출 방지
9. 모션이 끝나기 전 버튼 클릭 방지

*/


var $intro = $("#intro");

var $btns = $(".btns a");
var $btn1 = $(".btn1");
var $btn2 = $(".btn2");

var $top =$(".top");
var $right =$(".right");
var $bottom =$(".bottom");
var $left =$(".left");

var $content =$(".content");
var $close1 = $content.children(".close");

var $wrap2 = $("#wrap2")
var $close2 = $wrap2.children(".close")

var speed = 1000;
var class_name = "on";

//wrap1 open 이벤트
$btn1.on("click", function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");
    if(isOn) return;

    openWrap1();
    openWrap1();

    $btns.removeClass(class_name);
    $(this).addClass(class_name);
});

//wrap1 close 버튼 이벤트
$close1.on("click",function(e){
    e.preventDefault();
    openWrap1();
    openIntro();
});

//wrap1 
function closeIntro(){
    $intro.removeClass(class_name);
}

function openIntro(){
    $intro.addClass(class_name);
}

function openWrap1(){
    $top.animate({width:"100%"},speed,function(){
        $right.animate({height:"100%"},speed,function(){
            $bottom.animate({width:"100%"},speed,function(){
                $left.animate({height:"100%"},speed,function(){
                    $content.fadeIn(speed,function(){
                        $close1.animate({right:30,opacity:1},speed);
                    });
                });
            });
        });
    });
};

//wrap1 close 이벤트
function openWrap1(){
    $close1.animate({right:0, opacity:0},speed/2);
    $content.fadeOut(speed/2,function(){
        $top.animate({width:0},speed/2);
        $right.animate({height:0},speed/2);
        $bottom.animate({width:0},speed/2);
        $left.animate({height:0},speed/2);
    })
};

//wrap2 open 이벤트
$btn2.on("click", function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");//re : true/false
    if(isOn) return;

    closeIntro();
    closeWrap1();
    openWrap2();
    $btns.removeClass(class_name);
    $(this).addClass(class_name);
});

//wrap2 close 버튼 이벤트
$close2.on("click",function(e){
    e.preventDefault();
    closeWrap2();
    openIntro();

});


//wrap2 open 함수 정의
function openWrap2(){
    $wrap2.animate({
        height:400,
        marginTop:-200
    },speed);
}


//wrap2 close 함수 정의
function closeWrap2(){
    $wrap2.animate({
        heihgt:0,
        marginTop:0
    },speed)
}