import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:301/get')
    .then(result=>setTodos(result.data))
    .catch(err=>console.log(err))
  },[])


const handleEdit=(id)=>{
  
    axios.put('http://localhost:301/update/'+id)
    .then(result=>{location.reload()})
    .catch(err=>console.log(err))
  

}

const handleDelete=(id)=>{
  axios.delete('http://localhost:301/delete/'+id)
  .then(result=>{location.reload()})
  .catch(err=>console.log(err))
}

  return (
    <div className="home">
      <h2 className="a" >Todo List</h2>
      <Create />
      <br />
      {todos.length === 0 ? (
        <div>
          <h2 className="a">No Records</h2>
        </div>
      ) : (
        todos.map(todo =>(
         <div className='task'>
          <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
            {todo.done ? <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill> 
            :<BsCircleFill className="icon"/>
            }
          
            <p className={todo.done ?"line-through ":""}>{todo.task}</p>
          </div>
          <div>
            <span><BsFillTrashFill onClick={()=>handleDelete(todo._id)} className='icon'/></span>
          </div>
          </div>
          ))
      )}
    </div>
  );
}

export default Home;