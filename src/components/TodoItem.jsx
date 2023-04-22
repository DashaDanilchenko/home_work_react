import { useDispatch } from "react-redux";
import { deleteTodoOne, deleteTodoTwo, deleteTodoThree } from "../store/todoSlise";
import { toggleStatusOne, toggleStatusTwo, toggleStatusThree } from "../store/todoSlise";

const TodoItem = ({todo, index, setText, location}) => {
    const {id, text, completed} = todo;
    
    const dispatch = useDispatch()


    const deleteData = (id) => {
        switch (location) {
            case "one":
                dispatch(deleteTodoOne(id));
              break;
            case "two":
                dispatch(deleteTodoTwo(id));
              break;
            case "three":
                dispatch(deleteTodoThree(id));
              break;
           
            default:
              console.log("_");
          }
    }


    const toggle = (id) => {
        switch (location) {
            case "one":
                dispatch(toggleStatusOne(id));
              break;
            case "two":
                dispatch(toggleStatusTwo(id));
              break;
            case "three":
                dispatch(toggleStatusThree(id));
              break;
           
            default:
              console.log("_");
          }
    }



const edit = (id, text) => {
    setText(text)
    switch (location) {
        case "one":
            dispatch(deleteTodoOne( id));
          break;
        case "two":
            dispatch(deleteTodoTwo( id));
          break;
        case "three":
            dispatch(deleteTodoThree( id));
          break;
       
        default:
          console.log("_");
      }
  }

    return ( 
        <li className="todoItem">
            <span className="todoItem__number">{ index + 1 }</span>
            <input onChange={ () => toggle(id) } checked={ completed } className="todoItem__completed" type="checkbox" name="completed" />
            <p className="todoItem__text">{ text }</p>
            <button onClick={() => edit(id, text)} className="todoItem">&#9998;</button>
            <button onClick={() => deleteData(id)} className="todoItem__del">&times;</button>
        </li>
     );
}
 
export default TodoItem