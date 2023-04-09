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
       

    // function deleteData(id) {

  //   fetch(`http://localhost:3000/bucket/${id}`, { 
  //     method: "DELETE", 
  //   });

  //   }

  

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
