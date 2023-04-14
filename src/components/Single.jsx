import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Single = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(json => setProduct(json))
    }, [id])

    console.log(product)

  return (
    <div>
        <Link to="/">Home</Link>
        <h1 className="cursor">{ product.title }</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <img src={product.img} alt="" />       
    </div>
  )
}

export default Single