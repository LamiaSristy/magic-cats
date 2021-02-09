import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/Navbar.scss";

const Navbar = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <ul className="navItems">
        <li>
          <Link to="/" className="navBrand">           
            Cat-Pedia
          </Link>
        </li>
        <li className="navLink navLink-small">
          {' '}
          <Link to="/">Home</Link>
        </li>
        <li className="navLink navLink-small">
          {' '}
          <Link to="/AboutUs">AboutUs</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;