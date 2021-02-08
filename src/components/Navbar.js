import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/Navbar.scss";

const Navbar = () => (
  <nav className="nav navbar navbar-light bg-light">
    <div className="container">
      <ul className="navItems">
        <li>
          <Link to="/" className="navBrand">           
            Cat-Pedia
          </Link>
        </li>
        <li className="navLink">
          {' '}
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          {' '}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;