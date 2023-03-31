import Todo from "./Todo";

const Todolist = ({search, deleteTodo, edit, toggleTodoHandler}) => {
    return (
        <ul className="todo-list">
           {search().map((todo, index) => <Todo todo={todo} key={index} deleteTodo={deleteTodo} edit={edit} toggleTodoHandler={toggleTodoHandler}/>)}
        </ul>
    );
}

export default Todolist;