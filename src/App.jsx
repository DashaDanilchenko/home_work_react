import { useState, useEffect } from 'react';
import ListProducts from './components/ListProducts';
import Context from './Context';
import ModalWindows from './components/ModalWindows';
import Bucket from './components/Bucket';

function App() {
  const [products, setProducts] = useState([]);
  const [bucket, setBucket] = useState([])
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/bucket')
      .then(response => response.json())
      .then(json => setBucket(json))
  }, []);

  function watch (data) {
    setModal (true)
    setData(data)
  }

  const context = { 
    bucket,
    setBucket,
    watch,
    modal, 
    setModal,
    data,
  };


  return (
    <Context.Provider value={ context }>
      <ModalWindows/>
      <div className="container">
        <Bucket bucket={bucket} setBucket={setBucket}/>
        <ListProducts products={ products } />
      </div>
    </Context.Provider>
  );
}

export default App;
