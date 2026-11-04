import { useParams,useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../util";
const Diary = ()=>{
    const {id} =useParams();    //주소의 파라미터값을 받아서 id 객체 담는다
    const data = useDiary(id);
   // console.log(data,"data~");
    const navigate = useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
    const goEdit= ()=>{
        navigate(`/edit/${id}`);
    }


    if(!data){
        return <div>일기를 불러오고 있습니다....</div>
    }else{
        const {data,emotionId,content} = data;
        const title = `${getFormattedDate(new Date(Number(date)))}기록`;
        return(
            <>
                    <Header title={title}
                    leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
                    rightChild={<Button text={"수정하기"} onClick={goEdit}/>}
             />

            <div>{id}번 일기</div>
            <div> Diary 페이지</div>
            </>
        );
    }
}

export default Diary;