

// 함수 표현식응로 고치기 - 함수를 변수로 만드는것 ! 

// 화살표함수 61 page



let greeting = (name) => `hello ${name}`; //함수 만들기 (선언)
const greetingText = greeting("이정환"); // 함수 호출
console.log(greetingText);




// 김정민 학생은 점수가 100점이며 합격입니다. 조건 80점이상이면 합격

let score = (name, jumsu) =>{
    let result=null; /* if가 거짓말이 되서 값이 없을수도있으니 null값을넣어주어야함 */
     if (jumsu>=80) result="합격";
    else result="불합격"; /* else 안쓰면 합격이여도 불합격으로 처리됨 !! */   
    return ` ${name} 학생은 점수가 ${jumsu}점이며 ${result}입니다.`

}
console.log( score("김정민",70));


let b = 20; //전역 변수
function ss(){
    let a = 100; //지역변수 - 지역스코프함수
}



function foo(){
    console.log("foo");
    function bar(){
    foo();
    console.log("bar");
    }
}

 // bar(); 지역스코프함수는 외부에서 호출못함
function hh(){
if(true){
    function foo(){
        console.log("bar");
        }
    }
    for( let i=0; i<=5; i++){
        function bar11(){
            console.log("bar!!!");
        }
    }
}

foo(); // 호출안된다.
bar11(); //함수가 제어문안에 있으니깐 지역스코프(변수,함수) 이므로 외부에서 사용못함
// foo(); //호출안된다.


