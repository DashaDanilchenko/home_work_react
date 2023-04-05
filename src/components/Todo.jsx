import { useContext } from "react";
import Helpers from "../Helpers";

const Todo = ({todo}) => {

    const { deleteTodo, edit, toggleTodoHandler } = useContext(Helpers)
    
    
    return (
        <li className="todo-item">
            <input className="todo-item-inner" type="checkbox" name="" checked={todo.completed} onChange={() =>toggleTodoHandler(todo.id)}/>
            <span className="todo-item-inner">{todo.index}</span>
            <span className={todo.completed? "todo-item-inner grey through" : "todo-item-inner"}>{todo.title}</span>

            <div className="todo-item-actions">
                <button className="btn btn-edit" onClick={() => edit(todo.id, todo.title)}>
                    {todo.completed
                    ?<i className="fa-solid fa-square-pen grey"></i>
                    :<i className="fa-solid fa-square-pen"></i>
                    }
                </button>
                <button className="btn btn-del" onClick={() => deleteTodo(todo.id)}>
                    {todo.completed
                    ?<i className="fa-solid fa-trash-can grey"></i>
                    :<i className="fa-solid fa-trash-can"></i>
                    }    
                </button>
            </div>
        </li>
    )
}

export default Todo;