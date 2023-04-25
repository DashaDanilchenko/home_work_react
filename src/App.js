import { useAddUserMutation, useGetUserQuery, useDeleteUserMutation } from './redux';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState('')

  const {data=[], isLoading} = useGetUserQuery(count)

  const [newUser, setNewUser] = useState('')

const [addUser, {isError}] = useAddUserMutation()

const [deleteUser ]= useDeleteUserMutation()



  const handlerNewUser = async () => {
    if(newUser) {
      const user = {login:newUser, role:'user'}
      await addUser(user).unwrap()
      setNewUser('')
    }
  }

  const deleteData = async (id) => {
    await deleteUser(id).unwrap()
  }
 
if (isLoading) {
  return <p>Loading....</p>
}

  return (
    <div className="App">
     <h1>RTK-Query</h1>

<div>
  <input type='text' value={newUser} onChange={e => setNewUser(e.target.value)}/>
  <button onClick={handlerNewUser}>add user</button>
</div>

     <select value={count} onChange={(e) =>setCount(e.target.value)}>
      <option value=''>all</option>
      <option value="1">1</option>
      <option value='2'>2</option>
      <option value="3">3</option>
      
     </select>
     <ul>
      {
        data.map(user => <li key={user.id}>{`${user.id} : ${user.login} : ${user.role}`}
          <button onClick={() => deleteData(user.id)}>Delete</button>
        </li>)
      }
     </ul>
    </div>
  );
}

export default App;
