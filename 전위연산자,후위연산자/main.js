// 전위연산자/ 후위연산자

var num =0;
//num = num + 1; //1
//num +=1;
//num ++;
//console.log(num++); //후위연산자
console.log(++num);//전위연산자

//후위연산자
var num1 = 0;
console.log(num);//0
// num1 = num1+1;
num1 ++;
console.log(num);//1

var num2 = 0;
console.log(num2);//0
num2 = num2+1;
console.log(num2);//1


/*
후위 연산자 : 초기 변수값을 일단 그냥 활용하고 그 이후에 값을 카운트
전위 연산자 : 초기 변수를 바로 카운트하고 코드를 실행
*/

var num = 3;
var num2 = 4;

console.log(num++ + num2);

