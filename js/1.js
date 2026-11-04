let strA ="10";
let strB = "10개";
//문자형 -> 숫자형 Number 객체

console.log(Number(strA)+100);
console.log(Number(strB)+100); //NaN = Not a Number

// 010 - 1234 -7890
let tel = 10 -1234-7890; //이러면 계산이됨.
console.log(String(10)+ "-" +String(1234) + "-" +String(7890));
// 이과정없이하면 연산된값이 문자형으로 나오기에
let varA = "하이";
let varB = 1;
let varC = " ";

let boo1A = Boolean(varA);
let boo1B = Boolean(varB); // 0이면 false 아니면 true
let boo1C = Boolean(varC); // 문자열중에서 "" 아무 유니코드가 없는 공백문자면
//false 공백 아니면 true

console.log(boo1A);
console.log(boo1B);
console.log(boo1C);
