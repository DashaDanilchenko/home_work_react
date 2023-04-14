import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from "../Context";

const Bucket = () => {

  const { bucket } = useContext(Context);

  

  return (
    <div className="bucket">
      
      <Link to="/">Home</Link>
      <ul>
        {bucket.map((item) => <li key={item.id}>
          <span>{item.title}</span>
          <button className="close" onClick={() => console.log (false)}><i className="fa-solid fa-xmark"></i></button>
        </li>)}
      </ul>
    </div>
  )
}

export default Bucket