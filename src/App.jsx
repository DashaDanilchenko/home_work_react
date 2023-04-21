
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserOne, UserTwo, UserThree, NotFound, Layout } from "./components/pages";

function App() {


  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="one" element = {<UserOne/>}/>
            <Route path="two" element = {<UserTwo/>}/>
            <Route path="three" element = {<UserThree/>}/>
            <Route path="*" element = {<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
