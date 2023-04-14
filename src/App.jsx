
import Bucket from './components/Bucket';
import Home from './components/Home';
import Layout from './components/Layout';
import Single from './components/Single';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {

  const [bucket, setBucket] = useState({})
  const [read, setRead] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/bucket')
      .then(response => response.json())
      .then(json => setBucket(json))
  }, [read]);


  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home bucket={bucket} setBucket={setBucket}/>}/>
      <Route path='/:id' element={<Single />}/>
      <Route path='bucket' element={<Bucket bucket={bucket} read={read} setRead={setRead}/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route/>
    </Route>
   </Routes>
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
