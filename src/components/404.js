import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../stylesheets/404.scss';

const FourOFour = () => (
  <div>
    <Navbar />
    <div className="four-o-four">
      <h1 className="fof-header">404</h1>
      <h2 className="fof-not-found">Page not found</h2>
      <Link to="/" className="fof-go-home-link">Go to Home page</Link>
    </div>
  </div>
);

export default FourOFour;