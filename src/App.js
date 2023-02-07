import './App.css';
import MovieList from './views/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';
import  {Routes,Route} from 'react-router-dom';
import About from './views/About';
import Series from './views/Series';
import Home from './views/Home';
import Carte from './components/Carte';
function App() {
  const [text, SetText] = useState('');
  {/*console.log("text",text)*/}
  return (

    <div className="App">
      <Navbar SetText={SetText}/>
    {/* <MovieList text={text}/> */}
    <Routes>
    <Route path='/' element={<MovieList text={text}/>}></Route>
      <Route path='/Movie' element={<MovieList text={text}/>}      />
      
      <Route path='/movie/details' element={<Carte/>}      />
      <Route path='/about' element={<About/>}/>
      <Route path='/series' element={<Series/>}      />
      <Route path='*' element={<h1>Not Found</h1>}      />
    </Routes>

      
     
    </div>
  );
}

export default App;
