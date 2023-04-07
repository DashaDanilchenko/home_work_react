import { useState, useEffect } from 'react';
import ListProducts from './components/ListProducts';
import Context from './Context';
import ModalWindows from './components/ModalWindows';
import Bucket from './components/Bucket';

function App() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([])
  const [bucket, setBucket] = useState([])
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(null)

  // const [dataId, setDataId] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3000/bucket')
  //     .then(response => response.json())
  //     .then(json => setProductId(json))

  //     return productId

  // }, [productId]);

  useEffect (() => {
    setBucket( products.forEach((p) => {
      productId.forEach((i) => {
        if (p.id === i.id) {
          return p
        }
      })
    }))
  }, [productId, products])

  console.log(productId)

  function watch (data) {
    setModal (true)
    setData(data)
  }

  const context = { 
    products,
    modal,
    setModal,
    data,
    setData,
    watch,
  };


  return (
    <Context.Provider value={ context }>
      <ModalWindows/>
      <div className="container">
        <Bucket productId={productId} setProductId={setProductId}/>
        <ListProducts products={ products } />
      </div>
    </Context.Provider>
  );
}

export default App;
