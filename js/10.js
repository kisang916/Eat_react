function func( {name:n , age:a , location:l}){ //이렇게 이름 새로 지어줄수도있음
    console.log(n , a , l);
}

let person= {
    name: "이정환",
    age:25,
    location:"경기도"
};

func(person);

// 98 스프레드 연산자(...)-여러개 -전개연산자 rest 매개변수
let arrA = [1,2,3];
let arrB = [...arrA,4,5,6];
// ...하면 거기에있는배열들이 풀림
console.log(arrB);

let objA = {
    a:1,
    c:2
};
let objB = {
    ...objA,
    c:3,
    d:4
}
// 키가 동일할시  , 마지막키로 반영되어 찍힌다.
console.log(objB);

function func(a,b,c){
    console.log(a,b,c);
}
let arr =[1,2,3];
func(...arr);

// 100 rest 매개변수
function func1(...rest){
    console.log(rest);
}
func1( 1,2,3,4 );

function func2(a, ...r){
    console.log(a);
    console.log(r);
}
func2( 1,2,3,4 ); // a에 먼저값주고 나머지 r에줌 여러개는 덩어이로 나옴

/* function func3(...r , a ,b){
    console.log(a);
    console.log(b);
    console.log(r);
}
func3( 1,2,3,4 );      ...r이 한꺼번에 값 다 가져가서 뒤에 전달될것들이없음 고로 에러남
 */

// 101
let food = ["짜장면", "피자" , "치킨"]; // 배열
const newLength = food.push("탕수육" , "라자냐"); //배열에 탕수육 넣기 - 
//   push는 배열에 탕수육을먼저넣은다음에 배열의길이를 리턴함
console.log(food);
console.log(`새로운 배열의 길이 : ${newLength}`);

const removedItem = food.pop(); // 맨 마지막에있는것이 삭제됨.
console.log(removedItem);
console.log(food);

const removedItem2 = food.shift(); // 맨 앞에있는것이 나감
console.log(removedItem2); 
console.log(food);

const newLength3=food.unshift("갈비찜","설렁탕"); //제일앞에 갈비찜넣고 전체길이를 반환
console.log(food)
console.log(`새로운 배열의 길이 : ${newLength3}`);

// shift , unshift 는 느려짐 다른요소가 다옮겨져야해서
// pop , push를 더 권장함.

const arr3 = [1,2,3];
const sliced = arr3.slice(0,2); // 인덱스번호는 칸 왼쪽부터시작 0~1 , -1은뒤에서 첫번째 
// 여기서 slice는 인덱스번호 0~2 사이에있는 (1,2) 가 나옴
console.log(arr3);
console.log(sliced);

let arrA3=[1,2]; //배열
let arrB3={ a:3 , b:4 }; //객체
let arrC3= arrA3.concat(arrB3); // concat은 배열을 합하는것!
console.log(arrC3); //
console.log(arrA3);

let arrA4=[1,2]; 
let arrB4={ a:3 , b:4 }; 
let arrC4= arrA3.concat(arrB3); 
console.log(arrC4); // [1,2, {a:3 , b:4}]
console.log(arrA4);



