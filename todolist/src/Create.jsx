import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Create() {
  const [task,setTask]=useState('')
 const handleAdd=()=>{
        axios.post('http://localhost:301/add',{task:task})
        .then (result=>{location.reload()})
        .catch(err=>console.log(err))
}

  return (
    <div className='create_form'>
        <input type="text" id='' placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create