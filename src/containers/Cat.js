import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import fetchCat from '../actions/fetchCat';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../stylesheets/cat.scss';

const mapStateToProps = state => ({
  cats: state.catsReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchCat: id => dispatch(fetchCat(id)),
});

const Cat = ({
    cats, match, fetchCat, history
  }) => {
    const { params: { id } } = match;
    const { cat } = cats;

    useEffect(() => {
      fetchCat(id);
    }, [fetchCat, id]);
    
    if (cats.catLoading) {
      return (
        <div>
          <Navbar />
          <div className="">
            <h2>Cat is coming</h2>
          </div>
        </div>
      );
    }

    const handleBackPage = e => {
      e.preventDefault();
      history.goBack();
    };

    const view = cat ? (
      <div>      
        <Navbar />
        <div className="cat-details-container">
          <div className="cat-details">  
            <div className="cat-details-img-container">
              <img src={cat.url} alt={cat.name} className="cat-detailes-img" />
            </div>          
            <div className="cat-details-description">
              <p>{cat.name}</p>
              <p>{cat.description}</p>
              <p>{cat.origin}</p>
              <p>{cat.life_span}</p>
              <p><a href={cat.wikipedia_url} target='_blank'>To know more about please visit </a></p>
            </div>          
        </div>
        <button className="btn-create" type="button" onClick={handleBackPage}>
          Back
        </button>
      </div>
      <Footer />
    </div>
    ) : (
      // <FourOFour />
      <div className="404"><h2>Not Found</h2></div>
    );

    return view;
};

Cat.propTypes = {
  cats: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  fetchCat: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cat));
