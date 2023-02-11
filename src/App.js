import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import MePet from './components/MePet';
import Movie from './components/Movie';
import Time from './components/Time';
import { movie, aboutMe, mePet} from './data/data';
import photo from './data/mePhoto.jpg'


function App() {

  const [time, setTime] = useState('')


  setInterval(() => setTime(`
  ${new Date().getHours()} 
  : ${new Date().getMinutes()} 
  : ${new Date().getSeconds()}
`), 1)


  return (
    <div className="App">
      <AboutMe aboutMe={aboutMe} photo={photo}/> 
      <Movie movie={movie}/>
      <MePet mePet={mePet}/>
      <Time time={time}/>
    </div>
  );
}

export default App;
