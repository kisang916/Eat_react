let objB = new Object(); //객체선언

let board = {
    id: "no1", //프로퍼티 (자바에서 멤버필드)
    writer: "홍길동",
    content:"내용1", // 마지막게 반영됨 30
}

// 값 바꾸기 , 출력하기

board.id="id1";
board.writer="이순신"

re = board.id;
console.log(re);

//값 추가하기
board.date="2026-10-20";

board.count="20";
//삭제하기
delete board.writer;
// 객체 모두 출력
console.log(board);

