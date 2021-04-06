/*
선택자.attr()  선택한 DOM의 속성(Attribute)를 제어

선택자.attr({"변경할 속성명":"속성값"})
-해당 속성명에 해당하는 값 변경

선택자.attr("알아낼 속성명")
-해당 속성명에 해당하는 값을 리턴

선택자.text()
-선택자의 텍스트값 가져오기
선택자.text("바꿀 텍스트")
-선택자의 텍스트값을 변경하기
*/

//미션1. 
//링크를 https://www.nate.com으로 바꾸고
//타겟은 _selft로 변경
//title은 네이트로 이동


$("#test").attr({
    "href":"https://www.nate.com",
    "target":"_self",
    "title":"네이트로이동"});
$("#test").text("네이트");

//a태그의 속성값 알아내기
var url = $("#test").attr("href");
console.log(url);



//미션2
//.btns li 클릭할때
//a 태그 링크 이동 막기
//해당요소의 자식인 a태그의 href값을 구해서 변수에 저장
//.showBox의 자식인 img태그를 찾아서
//해당 img태그의 src값을 위해서 찾은 변수로 변경


//버튼클릭시
$("#gallery .btns li").on("click",function(e){
    e.preventDefault();//기본링크이동을 막고

    //변수 imgSrc에 내가 클릭한 버튼의 자식인 a의 href값을 저장
    var imgSrc =  $(this).children("a").attr("href");

    //.showBox img의 src값을 위의 변수값으로 바꿔치기
    $(".showBox img").attr({
        src : imgSrc
    });
});
