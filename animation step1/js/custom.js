var $btn1 = $(".btn1");
var $btn2 = $(".btn2");
var $top = $(".top");
var $right = $(".right");
var $bottom = $(".bottom");
var $left = $(".left");
var $content = $(".content");
var $close = $content.children(".close")

var $wrap2 = $("#wrap2");
var 
var speed = 1000;


$btn1.on("click",function(){
    $top.animate({width:"100%"},speed /2,function(){
        $right.animate({height:"100%"},500,function(){
            $bottom.animate({width:"100%"},500,function(){
                $left.animate({height:"100%"},500,function(){
                    $content.fadeIn(1000)
                });
            });
        });
    });
});


/*
.show() : display:block으로 요소 보임 .fadeIn(속도) :fade효과 추가
.hide() : display:none으로 요소 숨김. .fadeOut(속도)
*/

$close.on("click",function(e){
    e.preventDefault();

    $content.fadeOut(500, function(){
        $left.animate({height:0}, 500, function(){
            $bottom.animate({width:0}, 500, function(){
                $right.animate({height:0},500, function(){

                })
            })
        })
    });



//wrap2 btn2 open event
$btn2.on("click",function(e){
    e.preventDefault();

    $wrap2.animate({height:"500px"})
})


//wrap2 close event
$close2.on("click",function(e){
    e.preventDefault();

    $wrap2.animate({height:0, marginTop:0}, speed/2);
});


/* 함수 정의 */
function openWrap1(){
    
}