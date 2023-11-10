import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <div>
           
        <nav>
          <ul>
            <li> <Link to="/home"><span className="navbar-brand mb-0 h1">Home</span></Link></li>
            <li><Link to="/cat-fact">CatFact</Link></li>
            <li><Link to="/about">About</Link></li>
           
          </ul>
           
        </nav>
    </div>
  )
}

export default Navbar;
