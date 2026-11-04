for( let i=1; i<=100; i+=10) {
    console.log(i);

}


let j =10; //10 ~50까지 합
let sum=0;
while(j <= 50){
    sum = sum +j;
    j++;
}

console.log(sum);
/* 
do{
    참이면 처리할 내용;
}while(조건식);
1~100까지의 합을 구하다가 합이 3000이상이면 멈추기 합을 출력하기
*/

let k=0;
sum =0;
do{
    sum = sum + k;
    if( sum >= 3000) break;
    k++;
}while( k <= 100);
console.log( k, sum );

// 함수 function f(x) = 기능 (처리할 내용)을 묶어주는 것
// 1단계 함수만들기(정의) 2단계 함수를 호출해야 한다. - 실행시키는 것
/* 
function 함수이름( 매개변수 ){
    처리할 내용
}
 */
function a(){
    console.log("프린트 해주기");
}

function b( i, j){
        return i+j;
}
a();

console.log( b(10,50) );

// 숫자 3개를 매개변수로 받아서 가장 큰수를 리턴하기
let max =-9999;
function maxf( i,j,k ){
    if(max < i ) max = i;
    if(max < j ) max = j;
    if(max < k ) max = k;
    return max;
}

 console.log(maxf(10,4,8));


sum=0;

 function cacu(){
    for(let i=0; i<=100; i+=2){
    sum=sum+i;
    }
    return sum;
 }
 console.log(cacu());


person("홍길동",30,"서울"); 
// 함수호출
// 함수를 만들때 출력하기 홍길동님은 30살이고 서울에 거주합니다.
function person(name ,age , city){
    console.log(name+"님은"+age+"살이고"+city+"에 거주합니다.");
}

//중첩함수 함수안에 함수가 있다
function greeting(){
    function greetingwithName(name){
        console.log('hello! ${name}') ; // '' 팩틱 안에넣고 ${변수명} 하면적용됨
    }
    let name="이정환";
    greetingwithName(name);
}

greeting();

// 함수와 호이스팅 -함수먼저호출해도 늦게 선언하기만하면 됨 자바스크립트만의기능임


let gre=function(){
    console.log("hello 함수표현식");
}


gre();

let fExp=function(a,b){
    console.log(a,b);
}

fExp("이동원", "500만원");


let pSt=function(a,b,c){
    console.log(a+b+c+"입니다");
}

pSt("서울대","Ai 학과","이명수");

// 콜백 함수
function paretFunc( callBack ){
    console.log("parent");
    callBack();
}

function childFunc1(){
    console.log("child1");
}

function childFunc2(){
    console.log("child2");
}

paretFunc(childFunc2);

// 58 page

function repeat(count){
    for( let idx=0; idx <= count; idx++){
        console.log( idx + 1 ); // 1,2,3,4,5,6
    }
}
repeat(5);

function repeatDouble(count){
    for( let idx=0; idx <= count; idx++){
        console.log( (idx + 1)*2 ); // 
    }
}
repeatDouble(5);
// 중복된게 너무많아 -콜백함수를 이용하자 !! 기능 동일한데 내용이 조금 다를때 !!

function repeatCall(count , callBack){
     for( let idx=0; idx <= count; idx++){
         callBack( idx + 1 ); 
    }
}

function origin(count){
    console.log( count );
}

function double(count){
    console.log(count *2)
}

repeatCall(5,origin); /* callBack에 전달 callback 된 함수 count에는 idx +1 삽입 */

repeatCall(5,double);


function a( callBack ){
    for( let i=1 ; i<=10; i++){
        callBack();
    }
}

// "안녕" 10번찍기
function hi(){ 
    console.log("안녕");
}

function stupid(){
    console.log("바보");
}


a(hi);
a(stupid);


