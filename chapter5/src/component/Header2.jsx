import Body from "./Body";

const Header2=(props)=>{
    const{name, tel , city,school } = props; // props를 펼침 구조분해!
  return(
    <>
    <h1>{name}</h1>
    <h1>{tel}</h1>      
    <h1>{city}</h1>
    <h2>{school}</h2>
    <p>리액트</p>
    
    <img src="./vite.svg" alt="vite" />
    </>
  );
}
export default Header2;

/* 리턴태그가 하나여야함 */