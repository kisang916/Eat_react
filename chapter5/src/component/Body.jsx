
const Body = (props)=>{
    const { children} = props;
/* 받은컴포넌트를 일반변수로 받고 출력 ! */
    const number = 2;
    const numA =1;
    const numB =2;
    const strA = "안녕";
    const strB = "리액트";
    const boolA = true;
    const boolB = false;
    const objA = { a:1 , b:2 }; // 안됨 객체쓰고싶으면 프로퍼티를써야함.
    const arr=[1,2,3];

    return(
        <>
            <ul className="body">
                <li>자바</li>
                <li>html</li>
                <li>css</li>
                <li> { number } </li>
                <li> { numA + numB} </li>
                <li> { strA+" "+strB } </li>
                <li> { String(boolA || boolB )} </li>
                <li> {arr} </li>
                <li> 객체자료 {objA.a}---{objA.b}</li>
                <li> 조건부 랜더링 : {number}는{number % 2 ===0   ? "짝수":"홀수"}입니다.</li>
                <li>{children}</li>
            </ul>
            
        </>
    );
}

export default Body;    



