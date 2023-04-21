import { useDispatch } from "react-redux";
import { delTodo } from "../store/todoSlise";
import { toggleTodoCompleted } from "../store/todoSlise";

const TodoItem = ({todo, index, setText}) => {
    const {id, text, completed} = todo;

const dispatch = useDispatch()

const edit = (id, text) => {
    setText(text)
    dispatch(delTodo({id}))
  }

    return ( 
        <li className="todoItem">
            <span className="todoItem__number">{ index + 1 }</span>
            <input onChange={ () => dispatch(toggleTodoCompleted({id})) } checked={ completed } className="todoItem__completed" type="checkbox" name="completed" />
            <p className="todoItem__text">{ text }</p>
            <button onClick={() => edit(id, text)}><i className="fa-solid fa-square-pen"></i></button>
            <button onClick={() => dispatch(delTodo({id}))} className="todoItem__del">&times;</button>
        </li>
     );
}
 
export default TodoItem;