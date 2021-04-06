/* 
선택자.css()
- 선택한 DOM의 CSS를 변경가능
.css( { 변경할 내용 } )

- 선택한 DOM의 CSS 속성값을 알아냄
.css( "속성명" )

자바스크립트로 css값을 변경할 때 주의사항
- 스크립트는 무조건 DOM(html파일)만 제어가능
- 결국 .css()메서드로 변경하는 스타일은 style.css파일을 수정하는 것이 아닌 
태그 자체에 인라인스타일로 삽입해서 강제로 변경하는 방식이다.
*/

$(".box1").css({
    "width" : "300px",
    "height" : "300px",
    "border-radius" : "20px"
});

$(".box1").css({
    width:"50%",
    hegiht:500,
    borderRadius:10
})


// var result = $(".box1").css("width");
var result = $(".box1").width();
var result = $(".box1").outerWidth();
console.log(result);//300

//var result = $(".box1").css("heihgt");
var resultH = $(".box1").height();
var resultH = $(".box1").outerHeight();
console.log(resultH);

//.width()/.height()  -  실제 width 속성으로 적용된 너비값만 반환
//.outerWidth()/  .outerHeight()  -  padding, border 값까지 포함한 전체 너비값 반환



//미션1
//1. 브라우저를 리사이즈 할때마다 현재 브라우저의 너비값을 구하기
//2. 만약 브라우저의 폭이 540px보다 작아지면 body의 배경색을 orange로 적용
//3. 만약 브라우저 폭이 540px보다 같거나 크고 1180px보다 작으면 배경색을 pink로 적용
//4. 만약 1180px 보다 같거나 크면 배경색을 violet으로 적용

//$(window)  -  브라우저
//$("body")  -  문서
/*
1. 선택자 파악 : $(window)
2. 선택자 연결한 이벤트 : "resize"
3. 변경할 타겟 대상 : $("body")
4. 변경을 줄 속성 : width, backgroundColor
*/

/*
$(window).on("resize", function(){
    var wid = $(window).width();
    console.log(wid);

    if(wid<540){
        $("body").css({"backgorund-color" : "orange"});
    }
    if(wid>=540 && wid<1180){
        $("body").css({backgroundColor : "pink"});
    }
    if(wid>=1180){
        $("body").css({backgroundColor : "violet"});
    }
});
*/


$(window).on("resize", function(){
    var wid = $(window).width();
    var $box_wid = $(".box1").width();
    console.log(wid);  

    if(wid<540){
        $("body").css({"background-color" : "orange"}); 
    }
    if(wid>=540 && wid<1180){
        $("body").css({backgroundColor : "pink"}); 
        $(".box1").css({width:"100%"});
    }
    if(wid>=1180){
        $("body").css({backgroundColor: "violet"});
        $(".box1").css({width:1180});
    }
});
