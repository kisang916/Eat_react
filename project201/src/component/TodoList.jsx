import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList=( {todo,onUpdate, onDelete} )=>{
    const[serach , setSearch] = useState("");
    const onChangeSearch = (e)=>{
            setSearch(e.target.value)
    };
    const getSerachResult = () => {
      return  serach === ""   ? todo : todo.filter( (it)=>it.content.toLowerCase().includes( serach.toLocaleLowerCase() )  )
    };


    return(
        <>
            <div className="TodoList">
                <h4> Todo List </h4>
                <input onChange={onChangeSearch} value = {serach}
                type="text" className="searchbar" placeholder="검색어를 입력하세요"/>
                <div className="list_wrapper">
                    { getSerachResult().map( (it) => ( <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}   />))}
                    
                </div>
            </div>
        </>

    );
}

export default TodoList;


