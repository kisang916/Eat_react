 // 91page
 let arr=[1,2,3,4];
const len = arr.length;

 for( let idx = 0; idx <4; idx++){
    console.log( arr[idx] );
 }

 // for ...of 
 for(let item of arr){ // arr에서 하나씩 item으로 넘겨주는것임 넘길게없으면 끝남.
     console.log( item );
 }


// 93page
let person = {
    name:"이정환",
    age:25,
    location:"경기도"
}
const keyArr = Object.keys(person);
console.log(keyArr); // 배열로 나옴 프로퍼티이름들이

for(let key of keyArr){
    console.log(person[key]); // 배열의 반복문 for (let 변수 of 배열명) {반복할 내용}
}

let values=Object.values(person);
console.log(values); // 값들이나옴


// for (let 변수명 in 객체명 ){ 반복할 내용 }

let person2 = {
    name:"김수진",
    age:23,
    location:"서울"
}

console.log("------------");
for(let p in person2){
    console.log(p); // 'name' age location 하나씩 들어감 한번반복할때마다 '' 가 생겨서 !
    console.log(person2[p]);// '' person2[p]
}

//board 객체 만들기
//프로퍼티 내용 no:1 , writer : "홍길동" , content:"자바스크립트 공부" , date:"2026-10-21"
let board={
    no:1,
    writer:"홍길동",
    content:"자바스크립트 공부",
    date:"2026-10-21"
}
for(let p2 in board){
    console.log(board[p2]); //  배열을쓸때는 for of , 객체를쓸때는 for in
}

let arr3=[1,2,3];
let [a1,a2,a3] = arr3; // 배열의 구조분해는 순서대로
console.log(a1);
console.log(a2);
console.log(a3);

let person3 = {
    name: "이수진",
    age:13,
    location:"서울"
}

let {newName, newAge,newLo }=person3;
console.log(newName, newAge , newLo); //undefined

let { age , location , name }=person3; // 객체 구조 분해는 key 이름 동일한 것으로 값이넣어진다
console.log(age , location , name); // 13 서울 이수진


let person4 = {
    name: "이수민",
    age:26,
    location:"부산"
}


let func = ( {name , age, location} )=>{ //매개 변수로 객체를받음 
    console.log(`${name}님은 ${age}살이고 사는 곳은 ${location}입니다`);
}

func( person4 ); //person4에 프로퍼티를 함수에보냄

 // let {name , age, location}=person4; - person4에있는것을 왼쪽으로 넘겨라

