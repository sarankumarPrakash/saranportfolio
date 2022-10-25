import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Explore from './Routes/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ='/'  element={<Home/>} />
          <Route path ='/about'  element={<About/>} />
          <Route path ='/explore'  element={<Explore/>} />
          <Route path ='/contact'  element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
