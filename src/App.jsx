
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, UserOne, UserTwo, UserThree, NotFound } from "./components/pages";

function App() {


  return (
   
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element = {<Home/>}/>
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
