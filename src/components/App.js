import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CatFact from './CatFact';
import About from './About';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/cat-fact" component={CatFact} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
