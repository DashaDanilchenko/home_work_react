import './App.css';
import AboutMe from './components/AboutMe';
import MePet from './components/MePet';
import Movie from './components/Movie';
import Time from './components/Time';
import { movie, aboutMe, mePet, time} from './data/data';
import photo from './data/mePhoto.jpg'



function App() {
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
