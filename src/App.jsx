import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';
import CheckRadio from './components/CheckRadio';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Выучить React JS', done: false},
    {id: 2, text: 'Выучить Angular', done: true},
    {id: 3, text: 'Выучить react-router-dom', done: false},
    {id: 4, text: 'Выучить redux-toolkit', done: false},
  ]);

  const [text, setText] = useState('')
  const [textSearch, setTextSearch] = useState('')
  const [indexTodo, setIndexTodo] = useState(0)
  const [done, setDone] = useState(false)
  const [check, setCheck] = useState(true)

  function str_gen() {
    const allStr = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    let str = '';
    for (let i = 0; i < 5; i++) {
        let pos = Math.floor(Math.random() * allStr.length);
        str += allStr.substring(pos,pos+1);
    }
    return str;
}


  function addTodo (text) {
    const newTodo = {
      text,
      id: str_gen(),
      done: false,
    }
    setTodos([newTodo, ...todos])
  }

  function deleteTodo (id) {
    setTodos (todos.filter((todo) => todo.id !== id))
  }

  function edit (id, text) {
    setText (text)
    deleteTodo (id)
  }

  function search () {
    return todos.filter((todo) => todo.text.toLowerCase().includes(textSearch.toLowerCase()))
  }

  function doneTodo () {
    return todos.filter((todo) => todo.done === true)
  }

  const toggleTodoHandler = (id) => {

    todos.forEach((todo, index) => {
      if (todo.id === id) {
        setIndexTodo(index)
        setDone(todo.done)
      }
    })

    if (done) {
      setTodos([...todos, todos[indexTodo]])
      todos.splice(indexTodo, 1)
    } else {
      setTodos([ todos[indexTodo], ...todos])
      todos.splice((indexTodo + 1), 1)
      
    }

    setTodos(todos.map((todo) => {
      return todo.id === id
      ?{...todo, done: !todo.done}
      :{...todo}
    }))
  }

  

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} text={text} setText={setText}/>
      <Search textSearch={textSearch} setTextSearch={setTextSearch}/>
      <CheckRadio check={check} setCheck={setCheck}/>
      <h1>Todo App</h1>
      <Todolist search={search} deleteTodo={deleteTodo} edit={edit} toggleTodoHandler={toggleTodoHandler} check={check} doneTodo={doneTodo}/>
    </div>
  );
}

export default App;
