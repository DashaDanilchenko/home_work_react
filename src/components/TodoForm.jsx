function TodoForm ({addTodo, text, setText}) {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return <div>
    <form onSubmit={onSubmitHandler}>
        <input placeholder="Enter new todo" id="edit" value={text} onChange={(e) =>setText(e.target.value)}/>
        <button>Add</button>
    </form>
    </div>
}

export default TodoForm