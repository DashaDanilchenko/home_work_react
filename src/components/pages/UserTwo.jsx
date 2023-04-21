import TodoList from '../TodoList'

const UserTwo = ({setText}) => {
  return (
    <div>
      <p>user 2</p>
      <TodoList setText={setText}/>
    </div>
  )
}

export default UserTwo