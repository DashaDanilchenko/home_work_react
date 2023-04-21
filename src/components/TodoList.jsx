import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

const TodoList = ({setText, location}) => {
    
console.log(location)
const todos = useSelector(state => state.todos.todos)

useEffect (() => {
    fetch(`http://localhost:3000/${location}`)
    .then(data => data.json())
    .then(json => console.log(json))
})

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