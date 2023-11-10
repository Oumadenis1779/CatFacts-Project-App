import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CatFact from './CatFact';
import About from './About';
import NotFound from './NotFound';
import Navbar from './Navbar';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/home" exact element={<Home/>} />
          <Route path="/cat-fact" element={<CatFact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/notfound" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
