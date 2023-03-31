const Todo = ({todo, deleteTodo, edit, toggleTodoHandler}) => {
    
    return (
        <li className="todo-item">
            <input className="todo-item-inner" type="checkbox" name="" checked={todo.done} onChange={() =>toggleTodoHandler(todo.id)}/>
            <span className="todo-item-inner">{todo.index}</span>
            <span className={todo.done? "todo-item-inner grey through" : "todo-item-inner"}>{todo.text}</span>

            <div className="todo-item-actions">
                <button className="btn btn-edit" onClick={() => edit(todo.id, todo.text)}>
                    {todo.done
                    ?<i className="fa-solid fa-square-pen grey"></i>
                    :<i className="fa-solid fa-square-pen"></i>
                    }
                </button>
                <button className="btn btn-del" onClick={() => deleteTodo(todo.id)}>
                    {todo.done
                    ?<i className="fa-solid fa-trash-can grey"></i>
                    :<i className="fa-solid fa-trash-can"></i>
                    }    
                </button>
            </div>
        </li>
    )
}

export default Todo;