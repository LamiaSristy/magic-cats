/*eslint-disable*/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cat from '../components/CatBreed';
import fetchCats  from '../actions/fetchCats';
import '../stylesheets/catlist.css';

const mapStateToProp = state => ({
  cats: state.catsReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats()),
});

const CatList = ({
  cats, fetchCats
  }) => {
    useEffect(() => {
      fetchCats();
    }, [fetchCats]);

    if (cats.cats === null || cats.cats.length === 0) {
      return (
        <div>
          {/* <Navbar /> */}
          <div className="movies-not-loaded">
            <h2>Error occured. Please try again.</h2>
          </div>
        </div>
      );
    }

    const renderBook = book => <Cat key={book.id} cat={book}  />;

    return (
      <div>
        <div className="cats-container">
          {cats.cats.map(renderBook)}
        </div>
      </div>
    );
};

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCats: PropTypes.func.isRequired, 
};


export default connect(mapStateToProp, mapDispatchToProps)(CatList);
