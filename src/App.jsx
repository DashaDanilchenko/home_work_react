
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodoOne, addNewTodoTwo, addNewTodoThree} from "./store/todoSlise"
import InputField from "./components/InputField"
import TodoList from "./components/TodoList"

function App() {


  
    const [text, setText] = useState('')
    const [location, setLocation] = useState('')

  const dispatch = useDispatch()

  const addTask = (text) => {
    switch (location) {
      case "one":
        dispatch (addNewTodoOne(text));
        break;
      case "two":
        dispatch (addNewTodoTwo(text));
        break;
      case "three":
        dispatch (addNewTodoThree(text));
        break;
     
      default:
        console.log("_");
    }
    
  }


  return (
    <div className="container">
         <h1>Redux toolkit</h1>
    <InputField addTask={addTask} text={text} setText={setText} location={location}/>
    <header className="menu">
    <button  onClick={() => setLocation('one')}  >User 1</button>
    <button onClick={() => setLocation('two')} >User 2</button>
    <button  onClick={() => setLocation('three')}   >User 3</button>
   </header>

  {location && <TodoList setText={setText} location={location}/>}

 </div>
  )
      
 
}

export default App;
