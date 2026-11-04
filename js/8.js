if(!undefined){
    console.log("undefind는 falsy한 값입니다");
}
if(!null){
    console.log("null은 falsy한 값입니다");
}
if(!0n){
    console.log("0n는 falsy한 값입니다");
}
if(!0){
    console.log("0d은 falsy한 값입니다");
}
if(!-0){
    console.log("0은 falsy한 값입니다");
}
if(!NaN){
    console.log(" NaN은 falsy한 값입니다");
}
if(!""){
    console.log('"" falsy한 값입니다');
}

const num = "123";

if(num){ // 문자들어있으면 참으로 인식해서 true 아니면 false 찍음
    console.log("true");
}else{
    console.log("false");
}

let varA;
if(varA){
    console.log("값이 있음");
}else{
    console.log("값이 없음");
}


function calcA(){
    console.log("a");
    return false;
}

function calcB(){
    console.log("b");
    return false;
}

console.log(calcA()&&calcB()); // and는 두개가 참이면 참인것 앞에가 false니 뒤에는실행안함

// 또는 은 둘중하나가 참이면 참인것

function getName(person){
    if(person !== undefined){
    return person.name;
    }else{
        return "매개변수가 객체가 아닙니다";
    }
}

let person = { name: "이정환" }; 
let name = getName(person);
console.log(name);



//85 page 
function calcA1(){
    console.log("a");
    return true;
}

function calcB1(){
    console.log("b");
    return false;
}

console.log(calcA1() || calcB1()); // 앞에가 이미 참이면 어차피참이니 뒤에실행 x
                                // 앞에가 거짓말이면 뒤에까지해봄 


const varAA=0;
const varBB = "이정환";

const resultA = varAA || varBB; // 0 은 거짓으로 간주함 고로 true 인 이정환이나옴
const resultB = varAA ?? varBB; // 앞에 값이 있으면 앞에꺼수행 없으면 뒤에꺼수행

console.log(resultA);
console.log(resultB);

const arr1 = [1,2,3]; //배열
console.log(arr1.length); // 배열의 길이(크기) , 원소의 갯수
arr1.push(4); // 배열 넣기
console.log(arr1);

arr1.push(5);
arr1.pop(); /* 팝은 튀어나와서 없어짐 */



function myFunction(){
    console.log("hi");
}

console.log( myFunction.name ); //함수호출이아니라 함수의 이름을 내보내줌


//89
let person2 = { // 클래스 person2는 객체 주소 담기
    name:"이정환"
}

let man = person2;
man.age =25;

console.log(person2);
console.log(man); // 둘다 똑같은주소를 가리키는것임 !


let numA =1;
let numB =1;
console.log(numA === numB); // true

let man3 ={
    name:"이정환"
}
console.log(person3 ===man3); // false 둘이 다른 주소임

let arr3 = [1,2,3];
let arr4 = [1,2,3];
console.log(arr3===arr4); // false 배열도 참조값을 배열명에 저장함

let func1 = function(){
    console.log("func1");
}
let func2 = function(){
    console.log("func2");
}

console.log(func1 === func2); // false 함수도 참조값을 함수명에 저장함


