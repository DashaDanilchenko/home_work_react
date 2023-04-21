import TodoList from '../TodoList'

const UserOne = ({setText}) => {
  return (
    <div>
      <p>user 1</p>
      <TodoList setText={setText}/>
    </div>
  )
}

export default UserOne