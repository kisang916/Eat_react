import Child from "./Child";

const Body3=(props)=>{
    console.log(props);
   const {name,location,age,favorList}=props;
   /* 덩어리를풀어줌 */
    return(
        <>
            <div>{name}</div>
            <div>{location}</div>
            <div>{age}</div>
            <div>{favorList[0]}</div>
            <Child location={location}/>
        </>
    );
}

export default Body3;