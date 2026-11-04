import './App.css'
import Header from './component/Header';
import Header2 from './component/Header2';
import Footer from "./component/Footer";
import Body from "./component/Body";
import  Body4       from "./component/Body4";
import Body5 from "./component/Body5";
import Body6 from "./component/Body6";
import Body7 from "./component/Body7";
import Body8 from "./component/Body8";

const ChildComp = ()=>{
  return(
    <>
      <h3> Child Component  </h3>
    </>
  );
}

const App=()=>{
  const name="이정환";
  const tel="010-1234-5678";
  const bodyProps={
        city:"서울",
        school:"서울대"
  }


  return (
   <>
      <Body8/>
   </>
  )
}
/* 자식컴포넌트에 배치하면 자동으로 body의 props에 전달됨 
여기선 body가 부모고 안에있는 childcomp가 자식이됨
*/

export default App

/* <Body6/>
      <Body5/>
      <Header2 name={name} tel={tel} {...bodyProps}  />
      <Body> 
        <ChildComp/>
      </Body> */



