import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import Data from "../Data"

const Form = ({setUser}) => {

    const navigate = useNavigate();

    function submitData(event) {
        event.preventDefault()
        addData(title, description, price, photo)
        setTitle('')
        setDescription('')
        setPrice('')
        setPhoto('')
    }

    const { title,
        setTitle,
        description,
        setDescription,
        price,
        setPrice,
        photo,
        setPhoto,
        addData,
      } = useContext(Data)

      function singOut() {
        setUser(null)
        navigate('/', {replace: true})
      }

  return (
    <>
     <form onSubmit={submitData}>
        <label htmlFor="title">
            title :
            <input type="text" id="title" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label htmlFor="description">
            description :
            <input type="text" id="description" value={description}
            onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label htmlFor="price">
            price :
            <input type="text" id="price" value={price}
            onChange={(e) => setPrice(e.target.value)}/>
        </label>
        <label htmlFor="img">
            photo :
            <input type="text" id="img" value={photo}
            onChange={(e) => setPhoto(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>

    <button onClick={() => singOut()}>Sing Out</button>
    </>
   
  )
}

export default Form