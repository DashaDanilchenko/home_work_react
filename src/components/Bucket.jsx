import { Link } from "react-router-dom";

const Bucket = ({bucket, read, setRead}) => {

   function deleteData(id) {
    fetch(`http://localhost:3000/bucket/${id}`, { 
      method: "DELETE", 
    });
    setRead(!read)
    }


  return (
    <div className="bucket">
      
      <Link className="link"  to="/">Home</Link>
      <ul>
        {bucket.map((item) => <li className="item" key={item.id}>
          <span>{item.title}</span>
          <button  onClick={() => deleteData(item.id)}>delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default Bucket