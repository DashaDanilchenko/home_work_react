import Todo from "./Todo";

const Todolist = ({search, check, doneTodo}) => {
    return (
        <ul className="todo-list">
           {check
           ? search().map((todo, index) => <Todo todo={todo} key={index} />)
           : doneTodo().map((todo, index) => <Todo todo={todo} key={index} />)
           }
        </ul>
    );
}

export default Todolist;