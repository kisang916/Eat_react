import "./App.css";
import { useState, useEffect,useRef } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Even from "./component/Even";


function App() {

  const[count , setCount] = useState(0);
  const[text , setText ] = useState("");
  const didMountRef =useRef(false);


  const handleSetCount= (v)=>(
    setCount(count + v)
  )

  const handleChangeText = (e) =>{
    setText(e.target.value);
  }



  useEffect(()=>{
    if( !didMountRef.current ){
     
      didMountRef.current =true;
       console.log("컴포넌트 마운트");
      return;
    }else{//업데이트상태
      console.log("컴포넌트 업데이트 ...");
    }
  },[]);




  return (
    <>
      <div className="App">
          <h1> Simple Counter </h1>
          <section>
            <input type="text" value={text} onChange={handleChangeText}/>
          </section>


          <section>
              <Viewer count={count}/>
              { count % 2 === 0 && <Even/> }
                        
          </section>

          <section>
            <Controller handleSetCount={ handleSetCount }/>
          </section>
       </div>
    </>
  )

}

export default App
