let date = new Date( 24*3600*1000 ); 

console.log(date) // 2026 -10 -23 

let today1 = "2026-10-23"; // 문자 --> 날짜 
let date1 =new Date(today1); // 문자로들어온걸 날짜로 바꿔주는 기능이  new date
console.log(date1) 

let date2 = new Date( 2026,12,25 ); //숫자를 날짜로 월은 0~11 일은 0~30
let timeStamp = date2.getTime();

    console.log(timeStamp);
    let date3=new Date(timeStamp);
    console.log( date3 );

// 정리 new Date();-오늘날짜
//  new Date("2026-10-23") - 
// , new Date(timeStamp), new Date(2026,10,23)
// 이렇게 넣으면 날짜형식으로 만들수 있다.

let date4 = new Date();
console.log( date4 ); //오늘 날짜 UTC시간으로 -9시간 한 것이 표현

console.log( date4.getFullYear() );
console.log( date4.getMonth()+1 ); // 월 0부터시작 
console.log( date4.getDate() ); // 23일 얘는 그냥 나옴
console.log( date4.getDay() ); //요일 반환 0 -일요일 1-월요일

let date5 = new Date(2026,10,10);
date5.setFullYear(2027);
console.log( date5.toLocaleString('ko-KR',{timezone: 'Asia/Seoul'}) );

// 125 page
const today = new Date(2000,9,10,22);
console.log( today.toString() ); // 날짜 --> 문자로 바꾸기 


// 126 page
function moveMonth(date , moveMonth){
    const curTimestamp = date.getTime(); // 타임스탬프를 구한다. 1970 -1-1 부터 날짜까지의 밀리초를구함
    const curMonth =date.getMonth(); // 월을 구한다 여기선 10월 구함
    const resDate=new Date(curTimestamp); // 1970~2000-10-10까지 걸림 초를 구함 그걸 다시날짜로
    resDate.setMonth(curMonth+ moveMonth);
    return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A:",dateA); // A : 2000 - 10 -10

const dateB = moveMonth(dateA,1);
console.log("B:",dateB);

const dateC = moveMonth(dateA,-1);
console.log("C:",dateC);
