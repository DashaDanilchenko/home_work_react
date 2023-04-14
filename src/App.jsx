import { useState, useEffect } from 'react';
import Context from './Context';
import Bucket from './components/Bucket';
import Home from './components/Home';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);


  const context = { 
    
  };


  return (
    <Context.Provider value={ context }>
      <div className="container">
         <Bucket products={products}/>
        <Home products={ products }/>
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
