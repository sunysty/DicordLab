/*
    비밀번호 인증처리
        비밀번호가 같다면
        1. 비밀번호가 같은지
        2. 글자갯수가 5개이상인지 인증처리
        3. 숫자가 포함되어 있는지 인증처리
        4. 문자가 포함되어 있는지 인증처리
        5. 특수문자가 포함되어 있는지 인증처리
    
*/

$("input[type=submit]").on("click",function(e){
    e.preventDefault();
    var $pwd1 = $("input[name=pwd1]").val();
    var $pwd2 = $("input[name=pwd2]").val();
    var i = 0;
    var isConfirm = false;
    
    var num = /[0-9]/;
    var eng = /[a-zA-Z]/;
    var spc = /[~!@#$%^&*()_+|[|]]

    if($pwd1 == $pwd2){
        console.log("축하합니다");
    
        if($pwd1.length>=5){
            console.log("축하합니다");
        }else{
            console.log("다시 입력해주세요");
        }
    }

    if(num.test($pwd1)){
        console.log("숫자가 포함되어있습니다");
    }else{
        console.log("비밀번호에 숫자를 포함해 주세요")
    }
    if(eng.test(pwd1)){
        console.log("문자가 포함되어있습니다")
    }else{
        console.log("비밀번호에 문자를 포함해주세요.")
    }
});