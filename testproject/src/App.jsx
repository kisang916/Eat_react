import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";

const MyContext = React.createContext(defaultValue);

function App(){
  const data ='data';
  return(
  <>
  <div>
      <Header/>
      <MyContext.provider value={data}>
        <Body/>
      </MyContext.provider>
  </div>
  </>
  );
}

export default App;