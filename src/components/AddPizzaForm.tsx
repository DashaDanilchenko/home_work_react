import { useState } from "react";
import { FC, ChangeEvent, FormEvent } from "react";
import Pizza from "../models/Pizza";

interface IAddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

interface IForm {
    title: string;
    price: string;
    img: string;
}

const initState: IForm = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC<IAddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<IForm>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value,
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = newPizza;

        if (title && price && img) {
            addPizza({
                id: Date.now(),
                title,
                price: Number(price),
                img,
            });

            setNewPizza(initState);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Назва"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="ціна"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="зображення"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">+ додати піццу</button>
        </form>
    )
}

export default AddPizzaForm;