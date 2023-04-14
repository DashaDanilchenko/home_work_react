import { Link } from "react-router-dom";


const Product = ({product}) => {


    return (
        <div className="list-item" >
            <Link className="cursor" to={`/${product.id}`}>{ product.title }</Link>
            <span>{product.price}</span>
            <img src={product.img} alt="" />
            <button className="button-buy" onClick={() => console.log( product )}>Buy</button>
        </div>
    )
}

export default Product;