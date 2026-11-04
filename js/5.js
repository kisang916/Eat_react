if(true){
    var a=1;
}
console.log(a);

let objA = {}; // 객체선언
let objB = new Object(); //객체선언

let person = {
    name: "이정환", //프로퍼티 (자바에서 멤버필드)
    age: 25,
    age :30, // 마지막게 반영됨 30
    "like cat": true
}


const personName = person.name;
const personAge = person.age;
const personLikeCat = person.["like cat"];

console.log(personName);
console.log(personAge);

person.gender ="male"; /* person에 값 추가 함 */
const personGender = person.gender;
console.log(personGender);

person.name="홍길동";
personName = person.name; /* 객체가이미있으면 바뀌고 없으면 만들어짐 */
console.log(personName);

person["like cat"] = false;
personLikeCat=person["like cat"];
console.log(personLikeCat);

//객체의 필요없는 프로퍼티 삭제하기
delete person.age;



/* class Student{
    String name;
    int age;
    Student(name ,age){
        this.name = name;
        this.age = age;
    }
} */

new Student("이정환",25);

