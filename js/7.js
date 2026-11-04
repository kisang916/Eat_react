
const obj = {
    a: 1,
    b: "test"
}

obj.a=2;
obj.c=undefined;
delete obj.b;
console.log(obj);


// in연산자 
let obj1 = {
    a:1
}

console.log(obj.b); //undefined 정의디지 않았다.

let isPropertyExist = obj1.b !== undefined;
 // 여기선 정의되어있으면 true 안되어있기에 false
console.log(isPropertyExist);       

let person={
    age:10
   
};
let isNameExist = "name" in person; // in은 뒤에있는 객체 안에 name이 들어있냐고묻는것
console.log( isNameExist); //false


//
if( !("name" in person)){ // person객체에 name없음 -> false 의 반대 -> true->홍길동추가실행
    person.name="홍길동"
}

console.log(person);


//메서드 = 객체안에 있는 함수
let person1 = {
    name: "이정환",
    sayHi:function(){
        console.log("안녕");
    },
    add:function(x,y){
        return x+y;
    },
    mul:function(x,y,z){
        return x*y*z;
    },
    getPerson:function(a,b){
        return `${this.name}씨는 나이가 ${b}이고 전화번호는${a}입니다.`
    } //객체에서 바로 쓰려면 this 필요함
};

person1.sayHi();
console.log(person1.add(1,2)); // return값 받아서 볼려면 console.log 이용해야함
console.log(person1.mul(3,3,3));
console.log(person1.getPerson("010-1234-5678" , 29));
// 이정환씨는 나이가 29살이고 전화번호는 010-1234-5678 입니다.

// 배열
let arrA = new Array();
let arrB = [];

let arr = [1,"1",true,null,undefined,()=>{},function(){},[1,2,3],{a:1}];
console.log(arr[3]);
console.log(arr[8]);