import { NavLink } from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../../store/todoSlise"
import InputField from "../InputField"
import TodoList from "../TodoList";

const Layout = () => {

    const [text, setText] = useState('')
    const [location, setLocation] = useState('')

  const dispatch = useDispatch()

  const addTask = (text) => {
    dispatch (addTodo({text}))
    
  }

    const setActive = ({isActive}) => isActive ? 'menu_item menu_item_active' : 'menu_item'

  return (
    <div className="container">
         <h1>Redux toolkit</h1>
    <InputField addTask={addTask} text={text} setText={setText}/>
    <header className="menu">
    <NavLink  to="one" onClick={() => setLocation('one')}  className={setActive}>User 1</NavLink>
    <NavLink to="two" onClick={() => setLocation('two')} className={setActive}>User 2</NavLink>
    <NavLink to="three" onClick={() => setLocation('three')}   className={setActive}>User 3</NavLink>
   </header>

<main>
 <TodoList setText={setText} location={location}/>
</main>

 </div>
  )
}

export default Layout