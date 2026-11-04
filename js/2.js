let numA=1;
let numB;
let numC;

numB = numC =numA; // 오른쪽에있는걸 왼쪽으로
console.log(numA,numB,numC);

let numberA =1;
let numberB =2;
console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB); 
console.log(numberA % numberB);

let a=1;
a++;

let boolA = true;
let boolB = false;
console.log(boolA || boolB); // or
console.log(boolA && boolB); // and 
console.log(!boolA); // not 


console.log( a ===2); // 같다

// null : 값이 없다. 확정
let varA = 10;
let varB = 20;
let varC;
let varD;
let varE = null;


console.log(varA ?? varB); // 10 ?? null 병합연산자 둘다 확정되어있는값 왼쪾
console.log(varC ?? varB); // 20 확정되어있는값 출력
console.log(varB ?? varC); // 20
console.log(varC ?? varD); // undefined 출력
console.log(varA ?? varE); // 널하고 있으면 값이 있는게 나옴
console.log(varE ?? varC); // 널 vs unde -> 널이 나옴

let name="홍길동";
let nickname = "winterlood";
let user = name ?? nickname; // name에 값없으면 닉네임이 출력
                            // name에 값있으면 홍길동출력
console.log(user);

let varAA = 1;
console.log(++varAA); //10

varAA ="어";
console.log(varAA);
console.log(typeof varAA);
// 자바와 다르게 자바스크립트는 변수설정이 자유롭다. /동적 타이핑이라함

varAA=100; 

//3 항 연산자 구조 변수 =조건식 ? 참: 거짓; -조건맞으면 참수행 아니면 거짓수행
const varAAA = "안녕";
/* const는 상수이기에 중간에 변경하고 실행하면 에러남 */
 let result = typeof varAAA ==="string" ? "문자":"문자 아님";
 console.log(result);


 let jumsu=89;
let ok = jumsu>=80 ? "합격":"불합격";
console.log(ok);

/* 학교변수에 서울대학교를 넣고 만약에 고려대면 "동문" 아니면 "타대학이라고
출력하기" */
let univ="서울대"
let check= univ==="고려대" ? "동문":"타대학";
console.log(check);
/* 나이 변수에 "25"입력하고 기본급에 500000입력하기
만약에 나이가 20살이 상이고 기본급이 300000이상이면 "보통" 아니면 "빈곤"이라고출력하기 */
let age=parseInt("25");
let wage=500000;

let check2= age>=20&&wage>=300000 ? "보통":"빈곤";
console.log(check2);

// if문 조건식
// if (조건식) {조건이 참이면 처리할 내용}
// else{ 조건이 거짓이면 처리할 내용}

let num =11;
if(num>=10){
    console.log(num+100);
}
else{
    console.log(num-100);
}


let fruit = "apple";
switch(fruit){
    case "apple":{
            console.log("사과");
            break;
    }
    case "banana":{
        console.log("바나나");
    }
    default:{
        console.log("우리가 찾는 과일이 아님");
    }
}