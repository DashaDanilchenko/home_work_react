import { useState, useEffect } from 'react';
import ListProducts from './components/ListProducts';
import Context from './Context';
import ModalWindows from './components/ModalWindows';
import Bucket from './components/Bucket';

function App() {
  const [products, setProducts] = useState([])
  const [data, setData] = useState({})
  const [read, setRead] = useState(true)
  const [modal, setModal] = useState(false)
  const [bucket, setBucket] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, [read]);

  function didBuy(product) {
    fetch(`http://localhost:3000/products/${product.id}`, { 
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT", 
          body: JSON.stringify({...product, buy : !product.buy}),
        });
        setRead(!read) 
    }

  function watch (data) {
    setData(data)
    setModal (true)
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
        {
          bucket
          ? <Bucket products={products} didBuy={didBuy} setBucket={setBucket}/>
          :<button className="bucket cursor" onClick={() => setBucket(true)}><i class="fa-solid fa-bucket"></i> </button>
        }
        <ListProducts products={ products }/>
      </div>
    </Context.Provider>
  );
}

export default App;



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
