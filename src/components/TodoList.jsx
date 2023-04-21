import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({setText}) => {

const todos = useSelector(state => state.todos.todos)

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