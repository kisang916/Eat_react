// 105 순회 메서드
function cb(item,idx){
    console.log(`${idx}번째 요소: ${item}`);
}
const arr=[1,2,3];
arr.forEach(cb); //배열에있는 1이 item이 들어감 3까지 여기서 인덱스번호는 자동으로 idx에 들어감 0부터시작
// 배열의 원소만큼  cb함수를호출함

//배열의 합계구하기
// 배열의 foreach는 하나하나 들어감
//  foreach 함수쓰면 배열의 요소는 그냥 첫번째 변수에들어가는건가 ? 인덱스는 자동으로 두변째변수에들어가는거고?
let sum = 0;
arr.forEach((item , idx)=> {
    sum = sum + item;
        console.log(`${idx}번째 요소: ${item}`);
});
console.log(sum);



// 문제 배열 만들기 name=["이수지","이경미","박지연"]
// 출력 1번 이수지 2번이경미 3번 박지연
//const name=["이수지","이경미","박지연"];
//name.forEach( (all , num) => {
//    console.log(`${num+1}번 ${all}`)    
//});

const scores=[75,90,65,85,100,70];
scores.forEach((val,index) =>{
        if(val>=80) console.log(`${index+1}번 ${val}점`)
});



// 107 탐색 메서드

let arr4 = [1,3,5,7,1];
console.log(arr4.indexOf(1,0)); // 1이라는 숫자가 몇번째 인덱스에 있어? 0번째 인덱스부터 찾아줘
// 구조 배열명 .indexof(찾으려는 원소 , 찾는시작위치);

let name=["이수지", "이경미", "박지연"]
console.log(name.indexOf("이경미",0)); // 못찾으면 -1이 나온다.

if(name.indexOf("이경미",0)===-1){
    console.log("우리학생이 아닙니다.");
}else{
    console.log("우리학생입니다.");
}

// 109 includes 배열에 특정요소가 있는지 판별합니다.

console.log(name.includes("이수지")); // 배열안에 "이수지"가 있으면 true 없으면 false

// findIndex 함수
// 배열명.findIndex( 콜백함수(item,index,array) );

function determine(item , idx , arr){ // 반환된 boolean값을 arr에 저장 하고 
    if(item % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let arr5 = [1,3,5,6,8]; 
let index=arr5.findIndex(determine); //findIndex는 true인 index를 반환 처음 true만 반환 거기서멈춤
console.log(index); // 


let arr7 = [
    {name: "이종원"},
    {name: "이정환"},
    {name: "신다민"},
    {name: "김효빈"},
];

let findName =arr7.find( ( item , index , arr ) => item.name ==="이정환");
 // 이정환찾으면 이정환 리턴해줌 여기서 item에는 이름이 index에선 인덱스번호가 반환된건 arr에
console.log(findName);


// 문제: 나이가 20살 아래인 사람의 나이와 이름 출력
let arr8 = [
    {name: "이종원",age:25},
    {name: "이정환",age:35},
    {name: "신다민",age:55},
    {name: "김효빈",age:5}
];
let re = arr8.find((item)=> item.age<=20);
    console.log(re.name , re.age);

// 많이사용하는 함수 filter , map , forEach
// filter 구조 배열명.filter(콜백함수(item , idx ,array))
let arr9=[
    {name: "이종원",hobby:"축구"},
    {name: "이정환",hobby:"영화"},
    {name: "신다민",hobby:"축구"},
    {name: "김효빈",hobby:"노래"},
]

let filterArr = arr9.filter((item) => item.hobby==='축구');
console.log(filterArr);

// 80점 이상인 점수만 배열 담아라
const scores11=[65,90,75,88,100,55,80];
let filterArr2 = scores11.filter((item)=>item>=80);
console.log(filterArr2);

// 점수중에서 홀수인 점수만 배열에
let filterArr3 = scores11.filter((item)=>item%2===1);
console.log(filterArr3);

const products = [
    { name: "키보드", category: "전자제품", price: 70000, stock: 15 },
    { name: "마우스", category: "전자제품", price: 30000, stock: 20 },
    { name: "모니터", category: "전자제품", price: 250000, stock: 5 },
    { name: "스피커", category: "전자제품", price: 80000, stock: 12 },
    { name: "의자", category: "가구", price: 150000, stock: 20 },
    { name: "웹캠", category: "전자제품", price: 60000, stock: 10 }
];
/*
온라인 쇼핑몰의 상품 목록에서 다음 조건을 모두 만족하는 상품만 추출하세요.
- 가격이 50,000원 이상
- 재고가 10개 이상
- 상품 카테고리가 "전자제품"인 상품
*/
let filterArr4 = products.filter((item)=>item.price>=50000&&item.stock>=10&&item.category==="전자제품");
console.log(filterArr4);

const students = [
    { name: "김민수", korean: 90, english: 85, math: 80, attendance: 95 },
    { name: "이영희", korean: 95, english: 55, math: 90, attendance: 100 },
    { name: "박철수", korean: 70, english: 80, math: 85, attendance: 90 },
    { name: "최지우", korean: 88, english: 92, math: 90, attendance: 75 },
    { name: "정하늘", korean: 80, english: 85, math: 90, attendance: 85 },
    { name: "한서준", korean: 60, english: 65, math: 70, attendance: 80 }
];
/*
학생별 시험 점수와 출석률이 주어져 있습니다. 다음 조건을 만족하는 학생만 추출하세요.
- 국어, 영어, 수학 점수의 평균이 80점 이상
- 출석률이 80% 이상
- 세 과목 중 어느 하나라도 60점 미만이면 제외
*/
let filterArr5 = students.filter( (item)=> (item.korean+item.english+item.math)/3>=80
&& item.attendance>=80 
&&  item.korean >= 60 
&& item.english >= 60 
&& item.math >= 60);
console.log(filterArr5);


// map 112        
let arr10=[1,2,3,4];
let newArr10= arr10.map((item)=>item*3);
console.log(newArr10)

// map 배열의 원소를 1개씩 넣어서 다른 내용으로 가공해서 새로운 배열에 담는다

/* let newArr11 = arr11.map((item)=>item.name );
console.log(newArr11) */


const students2 = [
    { name: "김민수", korean: 80, english: 90, math: 85 },
    { name: "이영희", korean: 95, english: 88, math: 92 },
    { name: "박철수", korean: 70, english: 75, math: 80 }
];

/*
각 학생 객체에서 이름을 유지하고, 국어·영어·수학 점수의 합계를 계산하여 새로운 객체 배열을 만드세요.
[
    { name: "김민수", total: 255 },
    { name: "이영희", total: 275 },
    { name: "박철수", total: 225 }
]
*/

let newArr12 = students2.map((item) => {
                  let sum = item.korean + item.english + item.math;
                  return {name: item.name, total: sum}
               });
console.log( newArr12 )

let newArr13 = students2.map(function(item) {
                             return {name: item.name, total: item.korean + item.english + item.math}
                           });
console.log( newArr13)  

// 문제 회원의 성인 여부 확인하기
/* member.age >= 20은 비교 연산식입니다.
- 나이가 20세 이상이면 true
- 나이가 20세 미만이면 false
따라서 별도의 if문 없이도 성인 여부를 계산할 수 있습니다. */

/*
[
    { name: "김민수", age: 17, isAdult: false },
    { name: "이영희", age: 25, isAdult: true },
    { name: "박철수", age: 20, isAdult: true },
    { name: "최지우", age: 19, isAdult: false }
]
*/


const members = [
    { id: 1, name: "김민수", age: 17 },
    { id: 2, name: "이영희", age: 25 },
    { id: 3, name: "박철수", age: 20 },
    { id: 4, name: "최지우", age: 19 }
];
let newArr14 = members.map((item) => {
                  return {name: item.name, age:item.age , isAdult:item.age>=20}
               });

console.log(newArr14);


// 113 page sort

let arr12 = [10,5,3];
arr12.sort(); // 오름차순!! ["10","3","5"] sort 모든 자료를 문자로 바꾸어 처리한다
console.log(arr12);


function compare( a,b) { // 정렬의기본알고리즘
    if(a>b){
        return 1; //양수 이때 a는 b 뒤로감
    }else if (a<b){
        return -1; //음수 이때는 ? -1리턴후 가만히
    }else{
        return 0; // 같으면 0리턴후 가만히
    }
}

let arr13=[10,5,3];
arr13.sort(compare); // sort를 하는데 compare 함수를 기준으로 sort 하세요
// compare 함수로 작은값이 앞으로가고 1리턴 5, 10
// 두번째는 10과 3비교 -> 1 리턴후 5 , 3 ,10
// 세번째는 5,3 비교 ->1 리턴후 3 ,5 ,10

console.log(arr13);

// 문제1 숫자 오름차순과 내림차순 정렬
// 오름차순: [5, 10, 25, 40, 100]
// 내림차순: [100, 40, 25, 10, 5]
// 힌트: 숫자는 다음과 같이 비교해야 합니다.
// (a, b) => a - b  // 오름차순
// (a, b) => b - a  // 내림차순
const numbers = [40, 5, 100, 25, 10];
const ascending=[...numbers].sort((a,b)=> a-b); //오름차순 정렬됨
const descending=[...numbers].sort((a,b)=>a-b); //내림차순
 // numbers.sort(ascending);
console.log( ascending ); 
console.log( descending );

// 문제2 문자 오름차순 정렬
const names = ["박철수","김민수","최지우","이영희","강하늘"];
const descendingNames = [...names].sort((a,b)=> b.localeCompare(a,"ko"));
console.log(names.sort());
console.log(descendingNames);


// 문제3 상품 객체 배열을 가격이 낮은 순서대로 정렬하세요.
const products1 = [
    { name: "노트북", price: 1200000 },
    { name: "마우스", price: 30000 },
    { name: "모니터", price: 350000 },
    { name: "키보드", price: 80000 }
];

const asPrice = [...products1].sort(  (a,b)=> a.price-b.price ) // 가격오름차순
const desPrice = [...products1].sort(  (a,b)=> b.price-a.price ) // 가격 내림차순

// name 오름차순으로 정렬
const asName = [products1].sort( (a,b)=> a.name.localeCompare(b.name,"ko")); // 
// 국가명쓰면 그나라말 기준으로 정렬됨 앞에꺼랑 b랑 비교 a-b처럼

console.log(asPrice);
console.log(desPrice);
console.log(asName);

// 문제4 학생 평균 점수 내림차순 정렬하기




/* 
학생별 국어, 영어 ,수학 점수가 있습니다.
1.각 학생의 평균 점수를 계산합니다.
2.평균 점수가 높은 학생부터 정렬합니다
3.평균 점수는 소수점 둘째 자리까지 출력합니다.
실행결과
*/

const students1 = [
    { name: "김민수", korean: 80, english: 90, math: 85 },
    { name: "이영희", korean: 95, english: 88, math: 92 },
    { name: "박철수", korean: 70, english: 75, math: 80 },
    { name: "최지우", korean: 90, english: 90, math: 90 }
];

// map 이용해서 평균구하고 sort 로 정렬하기

 

let newArr1 = students1.map((item) => {
                  let avg = (item.korean + item.english + item.math)/3;
                  return {name: item.name, average: avg.toFixed(2)}
               }
                                                    // tofixed는소수점 average 프로퍼티도만들어준것
            
            ).sort((a,b)=>b. average- a. average )   ;

console.log( newArr1 )

// 115page join : 배열요소를 모두 연결해 하나의 문자열로 반환
let arr15 =["안녕","나는","이정환"];
console.log(arr15.join()); //안녕 , 나는, 이정환
console.log(arr15.join( "-" )); // 안녕 - 나는 - 이정환
console.log(arr15.join( "" ));

// 115 reduce
// 배열명.reduce(( acc , item , index , array ))

let arr16 = [ 1,2,3,4,5];
let result16= arr16.reduce( (acc,item)=>acc+item,0 );
//acc는 누적되고  item은 새로운것 값 계속 넣어줌 여기서 0 은 초기값임
console.log(result16);

// 1000 - 
const numbers17 = [ 10,20,30,40,50];
let result17 = numbers17.reduce( (acc,item)=> acc-item,1000 );
console.log(result17);



