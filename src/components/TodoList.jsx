import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../store/todoSlise";
import { useEffect } from "react";


const TodoList = ({setText, location}) => {
    const dispatch = useDispatch()
    
const todos = useSelector(state => state.todos.todos)


useEffect (() => {
    dispatch(fetchTodos(location))
}, [dispatch, location])

    return (
        <ul className="todoList">
            { 
                todos.map((todo, index) => 
                    <TodoItem
                        key={todo.id} 
                        todo={ todo } 
                        index={ index }
                        setText={ setText }
                        location={location}
                    />
                ) 
            }
        </ul>
    );
}
 
export default TodoList;