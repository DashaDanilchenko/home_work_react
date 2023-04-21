import TodoList from '../TodoList'

const UserThree = ({setText}) => {
  return (
    <div>
      <p>user 3</p>
      <TodoList setText={setText}/>
    </div>
  )
}

export default UserThree