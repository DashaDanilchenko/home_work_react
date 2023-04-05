function TodoForm ({addTodo, title, setTitle}) {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    return <div className="form">
    <form onSubmit={onSubmitHandler}>
        <input placeholder="Enter new todo" id="edit" value={title} onChange={(e) =>setTitle(e.target.value)}/>
        <button className="add">Add</button>
    </form>
    </div>
}

export default TodoForm