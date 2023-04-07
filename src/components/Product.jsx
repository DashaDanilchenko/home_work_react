import { useContext } from "react";
import Context from "../Context";

const Product = ({ product }) => {
    const {  watch } = useContext(Context);

    function postData(id) {
        const objectId = {id}
            fetch("http://localhost:3000/bucket", { 
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST", 
              body: JSON.stringify(objectId),
            });
        }
    

    return (
        <div className="list-item">
            <h1>{ product.title }</h1>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <img src={product.img} alt="" onClick={() => watch(product.title)}/>
            <button onClick={() => postData(product.id)}>Bucket</button>
        </div>
    )
}

export default Product;