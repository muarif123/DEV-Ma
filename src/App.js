import logo from './logo.svg';
import './App.css';
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/header';
import Home from './pages/home';
import Popular from './pages/popular';
import Upcoming from './pages/upcoming';
import Top from './pages/top';
import Movie from './pages/movie';

function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/md/:pop' element={<Popular/>}/>
      <Route path='/movie/:id' element={<Movie/>}/>
      <Route path='/mu/:id' element={<Upcoming/>}/>
      <Route path='/mt/:id' element={<Top/>}/>



    </Routes>
   </Router>
   
   
   </>
  );
}

export default App;
