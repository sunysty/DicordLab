var $header = $("#header"); 
var $gnb = $("#gnb"); 
var $gnb_li = $gnb.children("li"); 
var $gnb_li_ul = $gnb_li.children("ul"); 
var speed = 500; 
var ht_max = 0;

getSubMaxHeight();

//배경색 높이값을 조정하는 함수
function getSubMaxHeight(){
    $gnb_li.each(function(index){
        var current_ht = $(this).children("ul").height();
        ht_max = Math.max(ht_max, current_ht);
    });
}



//반복을 첫번째 돌때 비교값 0, 200 -> 200
//반복을 두번째 돌때 비교값 200, 250 -> 250
//반복을 세번째 돌때 비교값 250, 300 -> 300
//반복을 네번째 돌때 비교값 300, 200 -> 300
//반복을 다섯번째 돌때 비교값 300, 200 -> 300




//header에 마우스 오버시 
$header.on("mouseenter", openSub); 

//header에 마우스 아웃 시 
$header.on("mouseleave", closeSub);

//2depth메뉴에 마우스 이동시 1depth메뉴 활성화 유지 
$gnb_li.on("mouseenter", function(){
    $(this).children("a").addClass("on"); 
});

$gnb_li.on("mouseleave", function(){
    $(this).children("a").removeClass("on"); 
});


function openSub(){
    //.prepend() : 선택한 요소 안에서 앞쪽에 컨텐츠 추가 
    $header.prepend(
        $("<div class='bgGnb'>").css({
            width:"100%",
            height:ht_max,//gnb li ul의 높이를 비교하여 최고값 가져옴
            position:"absolute",
            top:151,
            left:0, 
            backgroundColor:'#777',
            zIndex:2, 
            display:'none'
        })
    );

    $(".bgGnb").stop().slideDown(speed); 
    $gnb_li_ul.stop().slideDown(speed);   
}

function closeSub(){
    $(".bgGnb").stop().slideUp(speed / 2, function(){
        $(this).remove(); 
    }); 
    $gnb_li_ul.stop().slideUp(speed / 2);
}