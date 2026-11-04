import { useState } from "react";

const TestComp = ()=>{


    return(
    <>
        <div>
            <h4> 테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDncrease}>-</button>
            </div>
        </div>
    </>
    );
}

export default TestComp;