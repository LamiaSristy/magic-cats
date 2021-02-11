import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/cat.png';
import '../stylesheets/Navbar.scss';

const Navbar = () => (
  <nav className="nav">
    <div className="container">
      <ul className="navItems">
        <li>
          <Link to="/" className="navBrand">
            <img className="navBrandImg" src={logo} alt="Brand logo" width="40" height="45" />
          </Link>
        </li>
        <li className="navLink">
          {' '}
          <Link to="/">Magical Cats</Link>
        </li>
        <li className="navLink">
          {' '}
          <Link to="/AboutUs">AboutUs</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
