import Todo from "./Todo";

const Todolist = ({search, deleteTodo, edit, toggleTodoHandler, check, doneTodo}) => {
    return (
        <ul className="todo-list">
           {check
           ? search().map((todo, index) => <Todo todo={todo} key={index} deleteTodo={deleteTodo} edit={edit} toggleTodoHandler={toggleTodoHandler}/>)
           : doneTodo().map((todo, index) => <Todo todo={todo} key={index} deleteTodo={deleteTodo} edit={edit} toggleTodoHandler={toggleTodoHandler}/>)
           }
        </ul>
    );
}

export default Todolist;