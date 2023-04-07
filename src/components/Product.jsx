import { useContext } from "react";
import Context from "../Context";

const Product = ({ product }) => {
    const {  watch } = useContext(Context);

    return (
        <li >
            <h1 className="todo-item-inner">{ product.title }</h1>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <img src={product.img} alt="" onClick={() => watch(product.title)}/>
        </li>
    )
}

export default Product;