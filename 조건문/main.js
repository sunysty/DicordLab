var now = new Date().getHours();

console.log(now);


if(now>=0 && now<9){//0시부터 9시까지
    document.getElementById("wrap").style.backgroundColor="black";
}else if(now>=9 && now<17){
    document.getElementById("wrap").style.backgroundColor="pink";
}else if(now>=17 && now<24){
    document.getElementById("wrap").style.backgroundColor="rosybrown";
}


//이거 이용해서 이미지나 시간을 바꿀 수 있음!

var result=prompt();
console.log(result);

if(result <18){
    document.getElementById("wrap").innerHTML ="<p>18세 이하는 이용 할 수 없습니다</p>";
}else{
    document.getElementById("wrap").innerHTML ="<p>환영합니다</p>";
}

(result <18) ? console.log("입장불가") : console.log("환영합니다");