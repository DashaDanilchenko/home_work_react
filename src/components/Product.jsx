import { useContext } from "react";
import Context from "../Context";

const Product = ({ product }) => {

    const {  watch, didBuy } = useContext(Context);

    // async function postData(id, title) {
    //     const objectId = {id, title}
    //     const res = await fetch("http://localhost:3000/bucket", { 
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           method: "POST", 
    //           body: JSON.stringify(objectId),
    //         });

    //         const obj = await res.json()
    //         setBucket([...bucket, obj])
    //     }
       

   

    return (
        <div className="list-item">
            <h1>{ product.title }</h1>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <img src={product.img} alt="" onClick={() => watch(product.title)}/>
            <button onClick={() => didBuy( product )}>Bucket</button>
        </div>
    )
}

export default Product;