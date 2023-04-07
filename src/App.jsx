import { useState, useEffect } from 'react';
import ListProducts from './components/ListProducts';
import Context from './Context';
import ModalWindows from './components/ModalWindows';

function App() {
  const [products, setProducts] = useState([]);

  const [modal, setModal] = useState(false)

  const [data, setData] = useState(null)

  // const [dataId, setDataId] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);

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


//   const email = singupForm.email.value
//   const password = singupForm.password.value
// const res = await fetch(' http://localhost:3000/users', {
//       headers: {
//        Accepi: "application/join",
//        'Conient.Type':"application/join"
//       },
//       method: 'POST',
//       body: JSON.stringify({email, password})
//   })
//   const data = await res.json()


  return (
    <Context.Provider value={ context }>
      <ModalWindows/>
      <div className="container">
        <ListProducts products={ products } />
      </div>
    </Context.Provider>
  );
}

export default App;
