import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import About from './Routes/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ='/'  element={<Home/>} />
          <Route path ='/project'  element={<Projects/>} />
          <Route path ='/about'  element={<About/>} />
          <Route path ='/contact'  element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
