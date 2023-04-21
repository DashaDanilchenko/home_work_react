import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlise";
import { toggleStatus } from "../store/todoSlise";

const TodoItem = ({todo, index, setText}) => {
    const {id, text, completed} = todo;

const dispatch = useDispatch()

const edit = (id, text) => {
    setText(text)
    dispatch(deleteTodo(id))
  }

    return ( 
        <li className="todoItem">
            <span className="todoItem__number">{ index + 1 }</span>
            <input onChange={ () => dispatch(toggleStatus(id)) } checked={ completed } className="todoItem__completed" type="checkbox" name="completed" />
            <p className="todoItem__text">{ text }</p>
            <button onClick={() => edit(id, text)} className="todoItem">&#9998;</button>
            <button onClick={() => dispatch(deleteTodo(id))} className="todoItem__del">&times;</button>
        </li>
     );
}
 
export default TodoItem