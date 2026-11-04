const Viewer = (props) =>{
    const {count} =props;
    return(
        <>
        <div>현재 카운트 : </div>
        <h1> {count} </h1>
        </>
    );
}
export default Viewer;