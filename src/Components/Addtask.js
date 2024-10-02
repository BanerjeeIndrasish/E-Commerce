import React, { useState } from 'react'
import { bindActionCreators } from "redux";
import {useDispatch} from "react-redux";
// import {addTask} from "../Redux/actioncreators"
import * as actioncreator from "../Redux/actioncreators"
import { useSelector } from 'react-redux';

export default function Addtask() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.updatetask);
  const value = useSelector((state) => state.numbers);
  const dispatch = useDispatch();
  const {addTask, addToCart, removeFromCart} = bindActionCreators(actioncreator, dispatch);
  return (
    <div className="Task">
        <div className="addtask">
        <input type='text' placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)}/>
        <button onClick={()=> addTask(task)}>+</button>
        </div>  
        <div className="showtasks">
            {tasks.length>0 ?
            tasks.map(task => <div key={task.id}>{task.id}&nbsp;{task.description}&nbsp;{task.resolve}</div>) : "No Tasks Added"}    
        </div>              
    </div>
  )
}
