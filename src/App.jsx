import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Выучить React JS', done: true},
    {id: 2, text: 'Выучить Angular', done: false},
    {id: 3, text: 'Выучить react-router-dom', done: false},
    {id: 4, text: 'Выучить redux-toolkit', done: false},
  ]);

  const [text, setText] = useState('')
  const [textSearch, setTextSearch] = useState('')
  const [indexTodo, setIndexTodo] = useState(Number)

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

  const toggleTodoHandler = (id) => {
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        setIndexTodo(index)
      if (todo.done) {
        setTodos([ todos[indexTodo], ...todos])
        setTodos(todos.splice((indexTodo + 1), 1))
      } else {
        setTodos([...todos, todos[indexTodo]])
        setTodos(todos.splice(indexTodo, 1))
      }
    }})

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
      <h1>Todo App</h1>
      <Todolist search={search} deleteTodo={deleteTodo} edit={edit} toggleTodoHandler={toggleTodoHandler} />
    </div>
  );
}

export default App;
