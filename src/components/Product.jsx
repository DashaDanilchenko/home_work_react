import { useContext } from "react";
import Context from "../Context";

const Product = ({ product }) => {

    const {  watch, didBuy } = useContext(Context);

    return (
        <div className="list-item" >
            <h1 className="cursor cursor" onClick={() => watch(product)}>{ product.title }</h1>
            <span>{product.price}</span>
            <img src={product.img} alt="" />
            <button className={product.buy ? "button-buy disabled" : "button-buy"} onClick={() => didBuy( product )} disabled={product.buy}>Buy</button>
        </div>
    )
}

export default Product;