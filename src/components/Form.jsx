import { useContext } from "react"
import Data from "../Data"

const Form = () => {

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

  return (
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
  )
}

export default Form