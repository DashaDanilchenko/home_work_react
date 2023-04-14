
import Bucket from './components/Bucket';
import Home from './components/Home';
import Layout from './components/Layout';
import Product from './components/Product';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/:id' element={<Product/>}/>
      <Route path='bucket' element={<Bucket/>}/>
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
