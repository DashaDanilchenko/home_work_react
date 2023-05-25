import { FC } from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface IRenderPizzaList {
    pizzasList: Pizza[];
    delPizza: (id: number) => void;
}

const RenderPizzaList: FC<IRenderPizzaList> = ({ pizzasList, delPizza }) => {
    return (
        <div className="pizza-list">
            {
                pizzasList.map( pizza => 
                    <SinglePizza
                        key={pizza.id}
                        pizza={pizza}
                        delPizza={delPizza}
                    />
                )
            }
            
        </div>
    )
}

export default RenderPizzaList;