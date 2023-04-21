import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../store/todoSlise";
import { useEffect } from "react";


const TodoList = ({setText, location}) => {
    const dispatch = useDispatch()

    console.log(location)
    
const todos = useSelector(state => state.todos.todos)

useEffect (() => {
    dispatch(fetchTodos())
}, [dispatch])

    return (
        <ul className="todoList">
            { 
                todos.map((todo, index) => 
                    <TodoItem
                        key={todo.id} 
                        todo={ todo } 
                        index={ index }
                        setText={ setText }
                    />
                ) 
            }
        </ul>
    );
}
 
export default TodoList;