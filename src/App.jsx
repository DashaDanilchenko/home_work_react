import { useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { useDispatch } from "react-redux";
import { addTodo} from "./store/todoSlise";

function App() {
  const [text, setText] =useState('')
  

  const dispatch = useDispatch()

  const addTask = (text) => {
    dispatch (addTodo({text}))
    
  }

  // const edit = (id, text) => {
  //   setText(text)
  //   dispatch(delTodo({id}))
  // }


  return (
    <div className="App">

      <h1>Redux toolkit</h1>
      <InputField addTask={addTask} text={text} setText={setText}/>
      
      <div className="todoListBlock">
        <h2>Todo list</h2>
        <TodoList setText={setText}/>
      </div>
      
    </div>
  );
}

export default App;
