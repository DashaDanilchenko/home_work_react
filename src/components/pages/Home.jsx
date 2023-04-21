import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../../store/todoSlise"
import InputField from "../InputField"



const Home = () => {
  

  const [text, setText] =useState('')
  

  const dispatch = useDispatch()

  const addTask = (text) => {
    dispatch (addTodo({text}))
    
  }

  return (
    <div>
       <h1>Redux toolkit</h1>
      <InputField addTask={addTask} text={text} setText={setText}/>
    </div>
  )
}

export default Home