import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <div>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home"><span className="navbar-brand mb-0 h1">Home</span></Link>
            <Link to="/cat-fact">CatFact</Link>
            <Link to="/about">About</Link>
            <Link to="/notfound">Notfound</Link>
        
        </nav>
    </div>
  )
}

export default Navbar;
