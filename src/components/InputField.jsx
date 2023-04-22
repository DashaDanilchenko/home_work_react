


const InputField = ({ addTask, text, setText }) => {

   

    const submitHandler = () => {
        addTask(text)
        setText('')
    }

    return ( 
        <div className="addTodo">
            <label className="addTodo__label">
                <input className="addTodo__input" type="text" value={ text } onChange={ e => setText(e.target.value) }/>
            </label>
            <button onClick={ submitHandler}>Add Todo</button>
        </div>

     );
}
 
export default InputField;