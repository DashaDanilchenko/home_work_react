function TodoForm ({addTodo, text, setText}) {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return <div className="form">
    <form onSubmit={onSubmitHandler}>
        <input placeholder="Enter new todo" id="edit" value={text} onChange={(e) =>setText(e.target.value)}/>
        <button className="add">Add</button>
    </form>
    </div>
}

export default TodoForm