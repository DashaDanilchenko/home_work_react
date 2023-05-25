import { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza";
import RenderPizzaList from "./components/RenderPizzaList";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    console.log(newPizza);
    setPizzasList([...pizzasList, newPizza]);
  }

  const delPizza = (id: number) => {
    console.log(`del pizza ${id}`);
  }

  return (
    <div className="container">
      <h1>Піцерія "у Дмитра"</h1>

      <AddPizzaForm addPizza={addPizza}/>

      <RenderPizzaList 
        pizzasList={pizzasList}
        delPizza={delPizza}
      />

    </div>
  );
}

export default App;
