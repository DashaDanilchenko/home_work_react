import { useContext } from "react";
import Context from "../Context";
import { async } from "q";

const Product = ({ product, productId, setProductId }) => {
    const {  watch } = useContext(Context);

    async function postData(id) {
        setProductId([...productId, id])
        const objectId = {id}
        const res = await  fetch("http://localhost:3000/bucket", { 
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST", 
              body: JSON.stringify(objectId),
            });

            const data = await res.json()
            console.log(data)
            console.log(productId)
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