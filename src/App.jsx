import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';
import CheckRadio from './components/CheckRadio';


function App() {
  const [todos, setTodos] = useState (() => {
    return (JSON.parse(localStorage.getItem('todos'))) || []}
  );
  const [title, setTitle] = useState('')
  const [textSearch, setTextSearch] = useState('')
  const [check, setCheck] = useState(true)

  useEffect(() => {
    if (!localStorage.todos) {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => setTodos(json))
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  function str_gen() {
    const allStr = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    let str = '';
    for (let i = 0; i < 5; i++) {
        let pos = Math.floor(Math.random() * allStr.length);
        str += allStr.substring(pos,pos+1);
    }
    return str;
}


  function addTodo (title) {
    const newTodo = {
      title,
      id: str_gen(),
      userId: str_gen(),
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  function deleteTodo (id) {
    setTodos (todos.filter((todo) => todo.id !== id))
  }

  function edit (id, title) {
    setTitle (title)
    deleteTodo (id)
  }

  function search () {
    return todos.filter((todo) => todo.title.toLowerCase().includes(textSearch.toLowerCase()))
  }

  function doneTodo () {
    return todos.filter((todo) => todo.completed === true)
  }

  const toggleTodoHandler = (id) => {

    setTodos(todos.map((todo) => {
      return todo.id === id
      ?{...todo, completed: !todo.completed}
      :{...todo}
    }))
  }

  

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} title={title} setTitle={setTitle}/>
      <Search textSearch={textSearch} setTextSearch={setTextSearch}/>
      <CheckRadio check={check} setCheck={setCheck}/>
      <h1>Todo App</h1>
      <Todolist search={search} deleteTodo={deleteTodo} edit={edit} toggleTodoHandler={toggleTodoHandler} check={check} doneTodo={doneTodo}/>
    </div>
  );
}

export default App;
