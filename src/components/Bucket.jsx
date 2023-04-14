import { Link } from "react-router-dom"

const Bucket = () => {


  return (
    <div className="bucket">
      <button className="close" onClick={() => console.log (false)}><i className="fa-solid fa-xmark"></i></button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Bucket