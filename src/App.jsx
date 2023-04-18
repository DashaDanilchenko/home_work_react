
import Bucket from './components/Bucket';
import Home from './components/Home';
import Layout from './components/Layout';
import Single from './components/Single';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Form from './components/Form';
import Data from './Data';
import Login from './components/Login';
import RequireAuth from './components/authorization/RequireAuth';

function App() {

  const [user, setUser] = useState(null);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [photo, setPhoto] = useState('')

  const [bucket, setBucket] = useState([])
  const [products, setProducts] = useState([])
  const [read, setRead] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/bucket')
      .then(response => response.json())
      .then(json => setBucket(json))
  }, [read]);


  useEffect(() => {
    fetch('http://localhost:3000/bucket')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, [read]);


  function str_gen() {
    const allStr = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    let str = '';
    for (let i = 0; i < 5; i++) {
        let pos = Math.floor(Math.random() * allStr.length);
        str += allStr.substring(pos,pos+1);
    }
    return str;
}


  async function addData (title, description, price, img) {
    const newData = {
      id: str_gen(),
      title,
      description,
      price,
      img,
    }

    const res = await fetch("http://localhost:3000/products", { 
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST", 
      body: JSON.stringify(newData),
    });

    const obj = await res.json()

    setProducts([...products, obj])
  }


  const data = {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    photo,
    setPhoto,
    addData,
  }


  return (
    <Data.Provider value = {data}>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home bucket={bucket} setBucket={setBucket}/>}/>
        <Route path='/:id' element={<Single />}/>
        <Route path='bucket' element={<Bucket bucket={bucket} read={read} setRead={setRead}/>}/>
        <Route path='newProduct' element={
          <RequireAuth user={user}>
            <Form setUser={setUser}/>   
           </RequireAuth>
        }/>
        <Route path="login/" element={ <Login setUser={setUser}/> } />
        <Route path='*' element={<NotFound/>}/>
      <Route/>
        </Route>
      </Routes>
    </Data.Provider>
   
  );
}

export default App;
