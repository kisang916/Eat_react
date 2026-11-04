import{useEffect} from "react";

const Even= ()=>{
    useEffect( ()=>{
        return()=> {console.log(" Even 컴포넌트 언마운트")};
    } , [] ); //마운트될때 한번만 콜백함수 실행해라 !

    return(
        <>
            <div> 현재 카운트는 짝수입니다 </div>
        </>
    );
}

export default Even;



