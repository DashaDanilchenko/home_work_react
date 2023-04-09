import { useState, useEffect } from 'react';
import ListProducts from './components/ListProducts';
import Context from './Context';
import ModalWindows from './components/ModalWindows';
import Bucket from './components/Bucket';

function App() {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);

  function didBuy(product) {
    fetch(`http://localhost:3000/products/${product.id}`, { 
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT", 
          body: JSON.stringify({...product, buy : !product.buy}),
        });
    }

  function watch (data) {
    setModal (true)
    setData(data)
  }

  const context = { 
    didBuy,
    watch,
    modal, 
    setModal,
    data,
  };


  return (
    <Context.Provider value={ context }>
      <ModalWindows/>
      <div className="container">
        <Bucket products={products} didBuy={didBuy}/>
        <ListProducts products={ products }/>
      </div>
    </Context.Provider>
  );
}

export default App;
