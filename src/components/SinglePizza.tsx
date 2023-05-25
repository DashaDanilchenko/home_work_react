import { FC } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface ISinglePizzaProps {
    pizza: Pizza;
    delPizza: (id: number) => void;
}

const SinglePizza: FC<ISinglePizzaProps> = ({pizza, delPizza}) => {
    return (
        <div key={pizza.id} className="pizza">
            <div className="pizza-img">
                <img src={`/img/${pizza.img}`} alt={pizza.title} />
            </div>

            <div className="pizza-content">
                <h3 className="pizza-title">{pizza.title}</h3>
                <div className="pizza-price">{pizza.price}</div>
            </div>
            
            <div className="action-block">
                <div  className="action-item edit"><AiFillEdit color="green" size="30px"/></div>
                <div onClick={() => delPizza(pizza.id) } className="action-item del"><AiFillDelete color="red" size="30px"/></div>
            </div>
        </div>
    )
}

export default SinglePizza;