import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "../components/Footer";
import '../stylesheets/404.scss';

const FourOFour = () => (
  <div>
    <Navbar />
    <div className="four-o-four">
      <h1 className="fof-header">SomeThing isn't correct!!!</h1>
      <h2 className="fof-not-found">Page not found</h2>
      <Link to="/" className="fof-go-home-link">Go to Home page</Link>
    </div>
    <Footer />
  </div>
);

export default FourOFour;