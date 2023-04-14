import { useEffect, useState } from "react";

const Product = () => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(json => setProduct(json))
    }, [id])


    return (
        <div className="list-item" >
            <h1 className="cursor" onClick={() => console.log( product.id )}>{ product.title }</h1>
            <span>{product.price}</span>
            <img src={product.img} alt="" />
            <button className="button-buy" onClick={() => console.log( product )}>Buy</button>
        </div>
    )
}

export default Product;